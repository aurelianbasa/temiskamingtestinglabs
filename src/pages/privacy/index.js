import * as React from 'react';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import { PageIntro } from '@components/page-parts';
export default function Privacy() {
  return (
    <Layout>
      <PageIntro eyebrow='Privacy notice' title='Information you share with TTL.'>
        <p>This notice explains the enquiry form on this website.</p>
      </PageIntro>
      <article className='site-container prose section-bottom'>
        <h2>Your enquiry</h2>
        <p>
          The form collects your name, email address, enquiry type and message, along with any company or
          project details you choose to provide. TTL uses this information to review and respond to your
          enquiry and discuss the proposed work.
        </p>
        <h2>Form delivery</h2>
        <p>
          Submissions are sent to Formspree, a third-party form service, for processing and delivery to TTL.
          Formspree’s handling of this information is described in its{' '}
          <a href='https://formspree.io/legal/privacy-policy/'>privacy policy</a>. You can also contact TTL
          directly by email or telephone.
        </p>
        <h2>What to include</h2>
        <p>
          Please keep the initial enquiry to a project outline. Do not send confidential documents or
          sensitive technical information through the form. Arrangements for further technical exchange can be
          discussed directly.
        </p>
        <h2>Questions about your information</h2>
        <p>
          For questions about information you have provided to TTL, contact{' '}
          <a href='mailto:aurelian@temiskaminglabs.com'>aurelian@temiskaminglabs.com</a> or{' '}
          <a href='tel:+17056795500'>+1 (705) 679-5500</a>.
        </p>
        <p className='small-copy'>Updated 5 September 2026.</p>
      </article>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='Enquiry privacy notice'
    path='/privacy/'
    description='How the TTL enquiry form collects project contact information and uses Formspree for processing and delivery.'
  />
);
