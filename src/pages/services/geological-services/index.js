import * as React from 'react';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import { PageIntro, ActionLink, ContactBand } from '@components/page-parts';
import FieldImage from '@media/services/geological-services/overview.webp';

export default function GeologicalServices() {
  return (
    <Layout>
      <PageIntro eyebrow='Geological support' title='A practical base for the work around the sample.'>
        <p>
          Discuss core handling, exploration support and workspace requirements for your project in the Cobalt
          area.
        </p>
        <div className='hero-actions'>
          <ActionLink to='/contact/?type=geological'>Discuss geological support</ActionLink>
        </div>
      </PageIntro>
      <section className='site-container facility-story section-bottom'>
        <figure>
          <img
            src={FieldImage}
            width='550'
            height='476'
            alt='People examining exposed rock in an archival geological fieldwork photograph.'
          />
          <figcaption>Geological fieldwork · TTL archive</figcaption>
        </figure>
        <div>
          <p className='eyebrow'>Space, handling & project fit</p>
          <h2>Tell us how your program needs to work.</h2>
          <p>
            Core logging, cutting, storage and project workspace each place different demands on a site. Start
            with the scale of your program, the people involved and the support you need.
          </p>
          <p>
            TTL’s published facility information identifies a separate coreshack on Highway 11 in Coleman,
            with core storage, logging, cutting and office spaces. Contact us to confirm current access,
            equipment and support arrangements for your proposed work.
          </p>
          <p className='location-note'>
            The Coleman location is separate from the laboratory at 1 Presley Street in Cobalt. Confirm the
            destination before arranging a visit or delivery.
          </p>
        </div>
      </section>
      <section className='soft-section'>
        <div className='site-container section-space'>
          <div className='section-heading'>
            <p className='eyebrow'>Scope the requirements</p>
            <h2>Three things to bring to the conversation.</h2>
          </div>
          <div className='three-columns'>
            <article>
              <span className='section-number'>01</span>
              <h3>The material</h3>
              <p>Core or sample quantities, existing packaging, handling needs and expected arrivals.</p>
            </article>
            <article>
              <span className='section-number'>02</span>
              <h3>The workspace</h3>
              <p>
                Logging, cutting, storage or office requirements, together with the equipment and people
                involved.
              </p>
            </article>
            <article>
              <span className='section-number'>03</span>
              <h3>The program</h3>
              <p>
                Location, duration and timing, plus any field or technical support you would like to discuss.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ContactBand category='geological' title='Give your program a starting point.'>
        Share the outline. We will discuss location, availability and a suitable scope.
      </ContactBand>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='Geological support & project workspace'
    path='/services/geological-services/'
    description='Discuss core handling, exploration support and workspace requirements. Confirm access and arrangements for the separate Coleman geological-support location.'
  />
);
