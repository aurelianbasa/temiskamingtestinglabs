import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FORM_ENDPOINT,
  enquiryTypeFromSearch,
  validateEnquiry,
  createEnquiryData,
  submitEnquiry,
} from '../src/lib/enquiry.mjs';
const valid = {
  name: ' Example Person ',
  email: ' person@example.com ',
  enquiryType: 'laboratory',
  message: 'Preparation enquiry for a research sample.',
  company: 'Example organization',
};

test('only supported, non-personal category parameters preselect the form', () => {
  assert.equal(enquiryTypeFromSearch('?type=partnership'), 'partnership');
  assert.equal(enquiryTypeFromSearch('?type=project&email=ignored@example.com'), 'project');
  assert.equal(enquiryTypeFromSearch('?type=unknown'), '');
  assert.equal(enquiryTypeFromSearch(''), '');
});
test('requires meaningful contact fields and rejects invalid email/category', () => {
  assert.deepEqual(validateEnquiry(valid), {});
  assert.deepEqual(
    Object.keys(validateEnquiry({ name: ' ', email: 'invalid', enquiryType: 'x', message: ' ' })),
    ['name', 'email', 'enquiryType', 'message'],
  );
});
test('sends correctly encoded FormData to the existing destination and maps reply-to', async () => {
  let calls = 0;
  assert.equal(
    await submitEnquiry(valid, {
      fetchImpl: async (url, options) => {
        calls++;
        assert.equal(url, FORM_ENDPOINT);
        assert.equal(url, 'https://formspree.io/f/xqkodqzd');
        assert.equal(options.method, 'POST');
        assert.deepEqual(options.headers, { Accept: 'application/json' });
        assert.ok(options.body instanceof FormData);
        assert.equal(options.body.get('name'), 'Example Person');
        assert.equal(options.body.get('email'), 'person@example.com');
        assert.equal(options.body.get('_replyto'), 'person@example.com');
        assert.equal(options.body.get('enquiryType'), 'Laboratory / sample work');
        assert.equal(options.body.get('form-name'), 'Contact');
        return new Response('{}', { status: 200 });
      },
    }),
    true,
  );
  assert.equal(calls, 1);
});
test('partnership payload excludes hidden sample fields after category changes', () => {
  const data = createEnquiryData({
    ...valid,
    enquiryType: 'partnership',
    material: 'Hidden prior answer',
    quantity: '10',
    collaboration: 'Equipment and operator proposal',
    timing: 'Autumn',
  });
  assert.equal(data.has('material'), false);
  assert.equal(data.has('quantity'), false);
  assert.equal(data.get('collaboration'), 'Equipment and operator proposal');
  assert.equal(data.get('timing'), 'Autumn');
});
test('sample work excludes hidden collaboration text and retains optional project details', () => {
  const data = createEnquiryData({
    ...valid,
    collaboration: 'Hidden prior answer',
    material: 'Rock',
    quantity: '12 samples',
    availableInformation: 'Previous report',
  });
  assert.equal(data.has('collaboration'), false);
  assert.equal(data.get('material'), 'Rock');
  assert.equal(data.get('availableInformation'), 'Previous report');
});
test('invalid and honeypot submissions never reach the provider', async () => {
  let calls = 0;
  const fetchImpl = async () => {
    calls++;
    return new Response('{}');
  };
  await assert.rejects(submitEnquiry({ ...valid, email: 'wrong' }, { fetchImpl }), /required fields/);
  await assert.rejects(submitEnquiry({ ...valid, _gotcha: 'spam' }, { fetchImpl }), /Unable to submit/);
  assert.equal(calls, 0);
});
test('provider rejection is reported and input values are not mutated', async () => {
  const values = Object.freeze({ ...valid });
  await assert.rejects(
    submitEnquiry(values, { fetchImpl: async () => new Response('{}', { status: 422 }) }),
    /not accepted/,
  );
  assert.equal(values.message, valid.message);
});
test('network failure reports uncertain delivery', async () => {
  await assert.rejects(
    submitEnquiry(valid, {
      fetchImpl: async () => {
        throw new TypeError('Network failed');
      },
    }),
    /Delivery could not be confirmed/,
  );
});
test('timeout aborts the request and does not claim success', async () => {
  let signal;
  await assert.rejects(
    submitEnquiry(valid, {
      timeoutMs: 10,
      fetchImpl: async (_, options) => {
        signal = options.signal;
        return new Promise(() => {});
      },
    }),
    /Delivery could not be confirmed/,
  );
  assert.equal(signal.aborted, true);
});
test('an unsuccessful request can be retried successfully', async () => {
  let calls = 0;
  const fetchImpl = async () => new Response('{}', { status: ++calls === 1 ? 500 : 200 });
  await assert.rejects(submitEnquiry(valid, { fetchImpl }));
  assert.equal(await submitEnquiry(valid, { fetchImpl }), true);
  assert.equal(calls, 2);
});
