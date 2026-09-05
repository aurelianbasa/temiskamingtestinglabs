import * as React from 'react';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import { PageIntro, ActionLink, ProjectSteps, ContactBand } from '@components/page-parts';

export default function ProjectOpportunities() {
  return (
    <Layout>
      <PageIntro eyebrow='Project & facility opportunities' title='A place to develop the next step.'>
        <p>
          Have material to characterize, a testwork program to prepare, or a facility requirement to explore?
          Start a conversation with TTL about the objective, the evidence already available and the work
          needed to move forward.
        </p>
        <div className='hero-actions'>
          <ActionLink to='/contact/?type=project'>Discuss a project opportunity</ActionLink>
        </div>
      </PageIntro>
      <section className='site-container opportunity-rows' aria-label='Opportunities to discuss'>
        <article>
          <span className='section-number'>01</span>
          <div>
            <h2>Material &amp; testwork programs</h2>
            <p>
              A defined question can be the beginning of a useful program. Discuss characterization,
              preparation for specialist analysis or project-specific testwork, including what can be scoped
              at TTL and what the broader program requires.
            </p>
            <ActionLink secondary to='/contact/?type=project'>
              Bring a material question
            </ActionLink>
          </div>
          <p className='row-aside'>
            Start with the material, the existing evidence and the decision you need to make.
          </p>
        </article>
        <article>
          <span className='section-number'>02</span>
          <div>
            <h2>Engineering &amp; research preparation</h2>
            <p>
              Tell us about sample-size reduction, screening or size-fraction preparation requirements for an
              engineering or research program. Material, equipment and operating fit are reviewed before a
              scope is agreed.
            </p>
            <ActionLink secondary to='/contact/?type=project'>
              Outline a preparation program
            </ActionLink>
          </div>
          <p className='row-aside'>
            Useful details include feed characteristics, target fractions, quantities and how the prepared
            material will be used.
          </p>
        </article>
        <article>
          <span className='section-number'>03</span>
          <div>
            <h2>Operating &amp; facility partnerships</h2>
            <p>
              A recurring requirement, equipment proposal or experienced operating team can open a different
              conversation. We welcome defined ideas for laboratory and preparation work, operating
              collaborations and staged facility development.
            </p>
            <ActionLink secondary to='/contact/?type=partnership'>
              Discuss a collaboration
            </ActionLink>
          </div>
          <p className='row-aside'>
            Describe the project, the role you could play and what you would need from the facility.
          </p>
        </article>
      </section>
      <section className='opportunity-band'>
        <div className='site-container opportunity-inner'>
          <div>
            <p className='eyebrow'>Make the opportunity concrete</p>
            <h2>What would move your project forward?</h2>
          </div>
          <div>
            <p>
              You do not need a complete proposal to start. A clear objective and a little context help us
              establish whether there is a useful next step.
            </p>
            <ul className='check-list light-list'>
              <li>Material and source</li>
              <li>The decision or outcome you are working toward</li>
              <li>Existing analysis or work completed</li>
              <li>Approximate sample or program scale</li>
              <li>Timing and the role you could play</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='site-container section-space'>
        <div className='section-heading'>
          <p className='eyebrow'>From interest to a defined scope</p>
          <h2>Build the conversation around the work.</h2>
        </div>
        <ProjectSteps />
        <p className='acceptance-note'>
          Project scope, material acceptance and site requirements are reviewed before work is agreed.
        </p>
      </section>
      <ContactBand title='Bring us the question behind the project.'>
        Some projects begin with a sample. Others need a longer program, equipment or an operating partner.
      </ContactBand>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='Material projects & facility partnerships'
    path='/project-opportunities/'
    description='Explore material evaluation, engineering preparation, operating collaborations and staged facility development with Temiskaming Testing Laboratories.'
  />
);
