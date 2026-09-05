import * as React from 'react';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import { PageIntro, ActionLink, AcceptanceNote, ContactBand } from '@components/page-parts';
import RequestForm from '@media/forms/requestforanalysis.pdf';
import CreditForm from '@media/forms/creditapplication.pdf';
import OriginalSchedule from '@media/forms/schedule.pdf';
import ReferenceSchedule from '@media/forms/schedule-2023-reference.pdf';

export default function Forms() {
  return (
    <Layout>
      <PageIntro eyebrow='Sample information & forms' title='Before you send a sample.'>
        <p>
          Start by confirming the material, analytical requirements and delivery arrangements with TTL. The
          forms below help document the work once the scope is understood.
        </p>
        <div className='hero-actions'>
          <ActionLink to='/contact/?type=laboratory'>Discuss a sample submission</ActionLink>
        </div>
      </PageIntro>
      <section className='site-container section-bottom'>
        <ol className='three-columns numbered-columns'>
          <li>
            <span className='section-number'>01 / ENQUIRE</span>
            <h2>Describe the work.</h2>
            <p>
              Share the material type, source, sample count, required analysis and timing. Ask for a current
              quotation.
            </p>
          </li>
          <li>
            <span className='section-number'>02 / CONFIRM</span>
            <h2>Agree the arrangements.</h2>
            <p>
              Confirm material acceptance, the scope of work, the destination and delivery instructions before
              shipment.
            </p>
          </li>
          <li>
            <span className='section-number'>03 / DOCUMENT</span>
            <h2>Identify every sample.</h2>
            <p>
              Complete the applicable submission information and match your sample identifiers to the agreed
              instructions.
            </p>
          </li>
        </ol>
        <AcceptanceNote />
      </section>
      <section className='soft-section'>
        <div className='site-container section-space'>
          <div className='section-heading'>
            <p className='eyebrow'>Downloads</p>
            <h2>The documents, with context.</h2>
            <p className='section-description'>
              Confirm that a form suits your agreed work before using it. The fee schedule is an archival
              reference; contact TTL for current methods, acceptance and pricing.
            </p>
          </div>
          <div className='document-list'>
            <article>
              <div>
                <span className='document-meta'>PDF · 228 KB · REVISION 7 JUNE 2023</span>
                <h3>Request for analysis</h3>
                <p>
                  Sample identifiers, requested work and submission details. Confirm the current analytical
                  scope with TTL.
                </p>
              </div>
              <a href={RequestForm} className='text-link'>
                Open request form <span aria-hidden='true'>↗</span>
              </a>
            </article>
            <article>
              <div>
                <span className='document-meta'>PDF · 139 KB · REVISION UNDATED</span>
                <h3>Credit application</h3>
                <p>
                  For account arrangements when requested by TTL. You do not need to complete this form to
                  make an enquiry.
                </p>
              </div>
              <a href={CreditForm} className='text-link'>
                Open credit application <span aria-hidden='true'>↗</span>
              </a>
            </article>
            <article>
              <div>
                <span className='document-meta'>PDF · 2.97 MB · ARCHIVAL 2023 SCHEDULE</span>
                <h3>2023 fee schedule — reference</h3>
                <p>
                  Historical fees and method information, retained for reference. This is not a current
                  quotation.
                </p>
                <a className='small-copy' href={OriginalSchedule}>
                  Original 2023 file (PDF · 16.9 MB)
                </a>
              </div>
              <a href={ReferenceSchedule} className='text-link'>
                Open reference schedule <span aria-hidden='true'>↗</span>
              </a>
            </article>
          </div>
          <p className='small-copy document-help'>
            PDFs can be viewed in most browsers. Download a copy if you need to complete or save a form; your
            available editing features depend on the PDF viewer.
          </p>
        </div>
      </section>
      <ContactBand category='laboratory' title='Unsure which form you need?'>
        Tell us about the samples and the result you need. We will discuss the appropriate next step.
      </ContactBand>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='Sample information & laboratory forms'
    path='/forms/'
    description='Confirm material acceptance before shipping to TTL. Find the request for analysis, credit application and clearly dated 2023 reference fee schedule.'
  />
);
