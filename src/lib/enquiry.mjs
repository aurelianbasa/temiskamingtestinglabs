export const FORM_ENDPOINT = 'https://formspree.io/f/xqkodqzd';
export const ENQUIRY_TYPES = [
  ['laboratory', 'Laboratory / sample work'],
  ['geological', 'Geological support'],
  ['project', 'Material / testwork project'],
  ['partnership', 'Facility / operating partnership'],
  ['other', 'Other / not sure'],
];

export function enquiryTypeFromSearch(search = '') {
  const value = new URLSearchParams(search).get('type');
  return ENQUIRY_TYPES.some(([key]) => key === value) ? value : '';
}

export function validateEnquiry(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = 'Enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email?.trim() || ''))
    errors.email = 'Enter a valid email address.';
  if (!ENQUIRY_TYPES.some(([key]) => key === values.enquiryType))
    errors.enquiryType = 'Choose an enquiry type.';
  if (!values.message?.trim()) errors.message = 'Tell us what you need to achieve.';
  return errors;
}

export function createEnquiryData(values) {
  const data = new FormData();
  const type = ENQUIRY_TYPES.find(([key]) => key === values.enquiryType);
  for (const key of ['name', 'email', 'company', 'message', '_gotcha']) {
    data.set(key, String(values[key] || '').trim());
  }
  data.set('_replyto', String(values.email || '').trim());
  data.set('enquiryType', type?.[1] || '');
  data.set('subject', 'TTL enquiry: ' + (type?.[1] || 'General'));
  data.set('form-name', 'Contact');
  const optional =
    values.enquiryType === 'partnership'
      ? ['collaboration', 'timing', 'availableInformation']
      : ['material', 'quantity', 'timing', 'availableInformation'];
  for (const key of optional) if (values[key]?.trim()) data.set(key, values[key].trim());
  return data;
}

export async function submitEnquiry(values, { fetchImpl = globalThis.fetch, timeoutMs = 20000 } = {}) {
  if (Object.keys(validateEnquiry(values)).length) throw new Error('Please complete the required fields.');
  if (values._gotcha)
    throw new Error('Unable to submit this enquiry. Please contact TTL by email or telephone.');
  const controller = new AbortController();
  let timer;
  try {
    const response = await Promise.race([
      fetchImpl(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: createEnquiryData(values),
        signal: controller.signal,
      }),
      new Promise((_, reject) => {
        timer = setTimeout(() => {
          controller.abort();
          reject(
            new Error(
              'Delivery could not be confirmed. Your text is still here. Contact TTL by email or telephone before resending.',
            ),
          );
        }, timeoutMs);
      }),
    ]);
    if (!response.ok)
      throw new Error(
        'Your enquiry was not accepted. Your text is still here; please try again or contact TTL directly.',
      );
    return true;
  } catch (error) {
    if (error instanceof TypeError || error.name === 'AbortError') {
      throw new Error(
        'Delivery could not be confirmed. Your text is still here. Contact TTL by email or telephone before resending.',
      );
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
