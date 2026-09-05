import * as React from 'react';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import { PageIntro, ActionLink } from '@components/page-parts';
export default function NotFound() {
  return (
    <Layout>
      <PageIntro eyebrow='Page not found' title='Let’s find the right starting point.'>
        <p>This address does not lead to a page on the TTL website.</p>
        <div className='hero-actions'>
          <ActionLink to='/'>Return to the homepage</ActionLink>
          <ActionLink secondary to='/contact/'>
            Contact TTL
          </ActionLink>
        </div>
      </PageIntro>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='Page not found'
    description='Return to the TTL homepage or contact us about your project.'
    path='/404/'
    noIndex
  />
);
