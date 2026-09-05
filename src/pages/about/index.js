import * as React from 'react';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import { PageIntro, ActionLink, ContactBand } from '@components/page-parts';
import ExteriorImage from '@media/home/hero.webp';
import HistoricalImage from '@media/about/hero.webp';
import PrepImage from '@media/home/prep-lab.webp';
import BenchImage from '@media/services/assay-lab/hero.webp';

export default function Facility() {
  return (
    <Layout>
      <PageIntro eyebrow='The facility · Cobalt, Ontario' title='A real place. A useful starting point.'>
        <p>
          At 1 Presley Street, TTL’s laboratory and mineral-testing heritage provides a setting for
          conversations about samples, technical work and the facility’s next chapter.
        </p>
        <div className='hero-actions'>
          <ActionLink to='/contact/?type=partnership'>Discuss a facility opportunity</ActionLink>
          <ActionLink secondary to='/services/assay-lab/'>
            Explore laboratory enquiries
          </ActionLink>
        </div>
      </PageIntro>
      <section className='site-container facility-story section-bottom'>
        <figure>
          <img
            src={ExteriorImage}
            width='650'
            height='340'
            alt='Brick buildings beside the water in Cobalt, from the TTL archive.'
          />
          <figcaption>The Cobalt facility · archive photograph</figcaption>
        </figure>
        <div>
          <p className='eyebrow'>1 Presley Street</p>
          <h2>Connect the project to the place.</h2>
          <p>
            A material program needs more than a list of equipment. It needs a suitable location, an agreed
            approach and a clear understanding of what the work requires.
          </p>
          <p>
            Tell us about your laboratory, preparation or operating requirements. We can discuss the spaces,
            the proposed scope and whether a site visit would be a useful next step.
          </p>
        </div>
      </section>
      <section className='soft-section'>
        <div className='site-container section-space'>
          <div className='section-heading'>
            <p className='eyebrow'>Inside the TTL archive</p>
            <h2>A closer look at the working spaces.</h2>
            <p className='section-description'>
              These photographs document the facility’s laboratory history. Discuss current equipment and
              space requirements with TTL when planning a program.
            </p>
          </div>
          <div className='photo-pair'>
            <figure>
              <img
                src={PrepImage}
                width='370'
                height='370'
                loading='lazy'
                alt='Blue sample preparation machinery inside the laboratory.'
              />
              <figcaption>Sample preparation area · archive photograph</figcaption>
            </figure>
            <figure>
              <img
                src={BenchImage}
                width='640'
                height='480'
                loading='lazy'
                alt='An analytical instrument on a laboratory bench.'
              />
              <figcaption>Analytical bench · archive photograph</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className='site-container section-space history-layout'>
        <div>
          <p className='eyebrow'>Roots in the Cobalt camp</p>
          <h2>A history with more than one chapter.</h2>
          <figure className='history-photo'>
            <img
              src={HistoricalImage}
              width='937'
              height='660'
              loading='lazy'
              alt='Black-and-white archival photograph of the historic industrial facility.'
            />
            <figcaption>Historical facility photograph · TTL archive</figcaption>
          </figure>
        </div>
        <div>
          <ol className='timeline'>
            <li>
              <span>1921</span>
              <div>
                <h3>The early facility</h3>
                <p>
                  The facility’s published history dates its establishment to 1921. Its industrial history
                  includes a later period of decommissioning.
                </p>
              </div>
            </li>
            <li>
              <span>2000</span>
              <div>
                <h3>The PolyMet chapter</h3>
                <p>
                  PolyMet Labs purchased the facility and developed its laboratory and mineral-testing role.
                </p>
              </div>
            </li>
            <li>
              <span>2020</span>
              <div>
                <h3>Relaunched as TTL</h3>
                <p>A change of ownership brought the Temiskaming Testing Laboratories name.</p>
              </div>
            </li>
            <li>
              <span>Next</span>
              <div>
                <h3>A project with a purpose</h3>
                <p>New work begins with a defined requirement and a conversation about the facility’s fit.</p>
              </div>
            </li>
          </ol>
          <p className='small-copy'>
            Historical milestones are drawn from TTL’s previously published facility history.
          </p>
        </div>
      </section>
      <section className='site-container split-content section-bottom location-section'>
        <div>
          <p className='eyebrow'>Two distinct locations</p>
          <h2>Confirm where the work belongs.</h2>
        </div>
        <div>
          <p>
            The laboratory address is <strong>1 Presley Street, Cobalt, Ontario P0J 1C0</strong>. The
            geological-support coreshack described in TTL’s published information is on Highway 11 in Coleman.
          </p>
          <p>Contact TTL to confirm the location and arrangements before visiting or shipping material.</p>
          <ActionLink secondary to='/services/geological-services/'>
            Read about geological support
          </ActionLink>
        </div>
      </section>
      <ContactBand category='partnership' title='See a role for this facility in your project?'>
        Tell us about the work, the opportunity and what you would need to move it forward.
      </ContactBand>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='The Cobalt facility & its history'
    path='/about/'
    description='Explore TTL’s facility at 1 Presley Street in Cobalt, its laboratory heritage and opportunities to discuss project-specific work and facility development.'
  />
);
