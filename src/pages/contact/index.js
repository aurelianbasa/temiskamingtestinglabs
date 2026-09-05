import * as React from 'react';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import EnquiryForm from '@components/enquiry-form';
import { PageIntro } from '@components/page-parts';
export default function Contact({ location }) {
  return (
    <Layout>
      <PageIntro eyebrow='Contact TTL' title='What are you working on?'>
        <p>Tell us what you need to achieve. We’ll review your enquiry and discuss the next step.</p>
      </PageIntro>
      <div className='site-container contact-layout section-bottom'>
        <section aria-label='Project enquiry form'>
          <EnquiryForm search={location?.search} />
        </section>
        <aside className='contact-details'>
          <p className='eyebrow'>Project enquiries</p>
          <h2>Start a conversation.</h2>
          <a href='mailto:aurelian@temiskaminglabs.com'>aurelian@temiskaminglabs.com</a>
          <a href='tel:+17056795500'>+1 (705) 679-5500</a>
          <div className='contact-address'>
            <h3>Laboratory address</h3>
            <address>
              1 Presley Street
              <br />
              Cobalt, Ontario
              <br />
              Canada P0J 1C0
            </address>
            <p>Contact TTL before visiting or shipping material so we can confirm the arrangements.</p>
          </div>
          <p className='small-copy'>
            A short outline is enough to start. Further technical information can be arranged directly.
          </p>
        </aside>
      </div>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='Contact TTL about your project'
    path='/contact/'
    description='Contact Temiskaming Testing Laboratories about sample work, geological support, material testwork or a facility partnership. Based in Cobalt, Ontario.'
  />
);
