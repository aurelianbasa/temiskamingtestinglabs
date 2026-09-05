import * as React from 'react';
import { Link } from 'gatsby';
import { ENQUIRY_TYPES, enquiryTypeFromSearch, validateEnquiry, submitEnquiry } from '../lib/enquiry.mjs';

const emptyValues = {
  name: '',
  email: '',
  company: '',
  enquiryType: '',
  message: '',
  material: '',
  quantity: '',
  timing: '',
  availableInformation: '',
  collaboration: '',
  _gotcha: '',
};

export default function EnquiryForm({ search = '', transport = submitEnquiry }) {
  const [values, setValues] = React.useState(emptyValues);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle');
  const [failure, setFailure] = React.useState('');
  const [ready, setReady] = React.useState(false);
  const submitting = React.useRef(false);
  const formRef = React.useRef(null);
  React.useEffect(() => {
    setReady(true);
    setValues((previous) => ({ ...previous, enquiryType: enquiryTypeFromSearch(search) }));
  }, [search]);

  function update(event) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    if (status === 'success' || status === 'invalid') setStatus('idle');
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('invalid');
      formRef.current?.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    submitting.current = true;
    setStatus('pending');
    setFailure('');
    try {
      await transport(values);
      setStatus('success');
      setValues({ ...emptyValues, enquiryType: values.enquiryType });
    } catch (error) {
      setStatus('error');
      setFailure(error.message || 'Delivery could not be confirmed. Please contact TTL directly.');
    } finally {
      submitting.current = false;
    }
  }
  function field(name, label, { multiline = false, required = false, ...props } = {}) {
    const Tag = multiline ? 'textarea' : 'input';
    return (
      <div className='form-field'>
        <label htmlFor={name}>
          {label}
          {required ? (
            <span className='required-marker' aria-hidden='true'>
              {' '}
              *
            </span>
          ) : (
            <span className='optional-label'> (optional)</span>
          )}
        </label>
        <Tag
          id={name}
          name={name}
          value={values[name]}
          onChange={update}
          required={required}
          aria-invalid={errors[name] ? true : undefined}
          aria-describedby={errors[name] ? name + '-error' : undefined}
          {...props}
        />
        {errors[name] && (
          <p className='field-error' id={name + '-error'}>
            {errors[name]}
          </p>
        )}
      </div>
    );
  }
  return (
    <form ref={formRef} className='enquiry-form' onSubmit={handleSubmit} noValidate>
      <p className='form-instruction'>Fields marked * are required.</p>
      <fieldset disabled={!ready || status === 'pending'}>
        <legend className='visually-hidden'>Your enquiry</legend>
        <div className='form-pair'>
          {field('name', 'Name', { required: true, autoComplete: 'name', maxLength: 150 })}
          {field('email', 'Email', { required: true, type: 'email', autoComplete: 'email', maxLength: 254 })}
        </div>
        {field('company', 'Company or organization', { autoComplete: 'organization', maxLength: 200 })}
        <div className='form-field'>
          <label htmlFor='enquiryType'>
            Enquiry type{' '}
            <span className='required-marker' aria-hidden='true'>
              *
            </span>
          </label>
          <select
            id='enquiryType'
            name='enquiryType'
            value={values.enquiryType}
            onChange={update}
            required
            aria-invalid={errors.enquiryType ? true : undefined}
            aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
          >
            <option value=''>Choose an enquiry type</option>
            {ENQUIRY_TYPES.map(([key, label]) => (
              <option value={key} key={key}>
                {label}
              </option>
            ))}
          </select>
          {errors.enquiryType && (
            <p className='field-error' id='enquiryType-error'>
              {errors.enquiryType}
            </p>
          )}
        </div>
        {field('message', 'What do you need to achieve?', {
          multiline: true,
          required: true,
          rows: 5,
          maxLength: 8000,
        })}
        <details className='project-details'>
          <summary>
            Add project details <span>(optional)</span>
          </summary>
          <div>
            {values.enquiryType === 'partnership' ? (
              field('collaboration', 'What collaboration do you have in mind?', {
                multiline: true,
                rows: 3,
                maxLength: 3000,
              })
            ) : (
              <>
                {field('material', 'Material and source', { maxLength: 500 })}
                {field('quantity', 'Approximate sample count or quantity', { maxLength: 300 })}
              </>
            )}
            {field('timing', 'Preferred timing', { maxLength: 300 })}
            {field('availableInformation', 'What information is already available?', {
              multiline: true,
              rows: 3,
              maxLength: 2000,
            })}
          </div>
        </details>
        <div className='form-honeypot' aria-hidden='true'>
          <label htmlFor='_gotcha'>Leave this field empty</label>
          <input
            id='_gotcha'
            name='_gotcha'
            value={values._gotcha}
            onChange={update}
            tabIndex={-1}
            autoComplete='off'
          />
        </div>
        <p className='form-privacy'>
          Please do not include confidential documents or sensitive technical details in your initial message.
          This form uses Formspree to deliver your enquiry.{' '}
          <Link to='/privacy/'>Read the privacy notice.</Link>
        </p>
        <button className='action-link send-button' type='submit' disabled={status === 'pending'}>
          {status === 'pending' ? 'Sending enquiry…' : 'Send enquiry'}
          <span aria-hidden='true'>↗</span>
        </button>
      </fieldset>
      <div className='form-status' role='status' aria-live='polite' aria-atomic='true'>
        {status === 'pending' && <p>Sending your enquiry. Please wait.</p>}
        {status === 'success' && (
          <div className='success-message'>
            <h2>Thank you — your enquiry has been sent.</h2>
            <p>We will review the details and discuss the next step.</p>
          </div>
        )}
      </div>
      {(status === 'error' || status === 'invalid') && (
        <div className='error-message' role='alert'>
          <p>{status === 'invalid' ? 'Please check the highlighted fields.' : failure}</p>
          {status === 'error' && (
            <p>
              <a href='mailto:aurelian@temiskaminglabs.com'>aurelian@temiskaminglabs.com</a> ·{' '}
              <a href='tel:+17056795500'>+1 (705) 679-5500</a>
            </p>
          )}
        </div>
      )}
      <noscript>
        <p className='error-message'>
          The enquiry form needs JavaScript. Please email{' '}
          <a href='mailto:aurelian@temiskaminglabs.com'>aurelian@temiskaminglabs.com</a> or call{' '}
          <a href='tel:+17056795500'>+1 (705) 679-5500</a>.
        </p>
      </noscript>
    </form>
  );
}
