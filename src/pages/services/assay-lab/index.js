import * as React from 'react';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import { PageIntro, ActionLink, ContactBand, AcceptanceNote } from '@components/page-parts';
import PrepImage from '@media/home/prep-lab.webp';
import FireImage from '@media/home/fire-assay.webp';
import BenchImage from '@media/services/assay-lab/hero.webp';

export default function AssayLab() {
  return (
    <Layout>
      <PageIntro eyebrow='Laboratory services' title='Good decisions begin with a representative sample.'>
        <p>
          Discuss sample preparation, gold and silver assay requirements, and the information your project
          needs to move forward.
        </p>
        <div className='hero-actions'>
          <ActionLink to='/contact/?type=laboratory'>Discuss sample work</ActionLink>
          <ActionLink secondary to='/forms/'>
            Sample information &amp; forms
          </ActionLink>
        </div>
      </PageIntro>
      <section className='site-container editorial-rows'>
        <article className='editorial-row'>
          <div>
            <span className='section-number'>01 / PREPARATION</span>
            <h2>Start with the right sample.</h2>
          </div>
          <div>
            <p>
              Tell us about the material, its source, the number of samples and the analysis you are planning.
              Crushing, splitting and pulverization requirements should be matched to the material and the
              purpose of the work.
            </p>
            <p>
              Include any target particle size, required sample mass, previous preparation and handling
              instructions. We will discuss the proposed scope and confirm the arrangements before you send
              material.
            </p>
          </div>
          <figure>
            <img
              src={PrepImage}
              width='370'
              height='370'
              loading='lazy'
              alt='Sample preparation equipment in the TTL laboratory archive.'
            />
            <figcaption>Preparation area · archive photograph</figcaption>
          </figure>
        </article>
        <article className='editorial-row'>
          <div>
            <span className='section-number'>02 / ANALYTICAL SCOPE</span>
            <h2>Specify the decision, then the analysis.</h2>
          </div>
          <div>
            <p>
              For gold and silver assay enquiries, share your expected concentration range, analytical purpose
              and any required finish. These details help establish whether the proposed method and reporting
              range suit the project.
            </p>
            <p>
              Ask us to confirm the current analytical scope, sample requirements and quotation. If your
              project involves other elements or specialist analysis, describe what you need so the
              appropriate next step can be discussed.
            </p>
          </div>
          <figure>
            <img
              src={FireImage}
              width='370'
              height='370'
              loading='lazy'
              alt='Glowing assay vessels from the TTL laboratory archive.'
            />
            <figcaption>Assay work · archive photograph</figcaption>
          </figure>
        </article>
        <article className='editorial-row'>
          <div>
            <span className='section-number'>03 / QUALITY & REPORTING</span>
            <h2>Agree what the results need to show.</h2>
          </div>
          <div>
            <p>
              Discuss sample identification, blanks, duplicates and reference materials when defining the
              program. Include your reporting format, units, detection-limit requirements and any
              project-specific quality procedures.
            </p>
            <p>
              Confirm how residual samples and pulps should be retained, returned or otherwise handled as part
              of the agreed work.
            </p>
          </div>
          <figure>
            <img
              src={BenchImage}
              width='640'
              height='480'
              loading='lazy'
              alt='An analytical instrument and bench in the TTL laboratory archive.'
            />
            <figcaption>Analytical bench · archive photograph</figcaption>
          </figure>
        </article>
      </section>
      <section className='site-container section-space split-content'>
        <div>
          <p className='eyebrow'>A useful first enquiry</p>
          <h2>Help us understand the work.</h2>
        </div>
        <div>
          <ul className='check-list'>
            <li>Material type, source and any relevant handling information</li>
            <li>Approximate sample count and quantity</li>
            <li>Elements, method or decision you need to address</li>
            <li>Expected concentrations and available previous results</li>
            <li>Reporting needs and preferred timing</li>
          </ul>
          <AcceptanceNote />
        </div>
      </section>
      <ContactBand category='laboratory' title='Have samples in mind?'>
        A short description is enough to start. We can discuss the details from there.
      </ContactBand>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='Sample preparation & assay enquiries'
    path='/services/assay-lab/'
    description='Discuss sample preparation, gold and silver assay requirements, quality procedures and reporting needs with TTL in Cobalt, Ontario.'
  />
);
