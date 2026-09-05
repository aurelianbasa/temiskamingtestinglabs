import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '@components/layout';
import SiteHead from '@components/site-head';
import { ActionLink, ProjectSteps, AcceptanceNote } from '@components/page-parts';
import HeroImage from '@media/home/ttl-fire-assay-1400.webp';
import HeroSmall from '@media/home/ttl-fire-assay-700.webp';
import ExteriorImage from '@media/home/hero.webp';

export default function Home() {
  return (
    <Layout>
      <section className='site-container home-hero'>
        <div className='hero-copy'>
          <p className='eyebrow'>Cobalt, Ontario</p>
          <h1>
            Start with
            <br />
            the material<span className='green-stop'>.</span>
          </h1>
          <p className='hero-description'>
            Discuss sample preparation, assay requirements and mineral project opportunities with Temiskaming
            Testing Laboratories.
          </p>
          <div className='hero-actions'>
            <ActionLink to='/contact/'>Discuss a project</ActionLink>
            <ActionLink secondary to='/services/assay-lab/'>
              Explore laboratory services
            </ActionLink>
          </div>
          <Link className='utility-link' to='/forms/'>
            Sample submission information <span aria-hidden='true'>→</span>
          </Link>
        </div>
        <figure className='hero-image'>
          <img
            src={HeroImage}
            srcSet={HeroSmall + ' 700w, ' + HeroImage + ' 1400w'}
            sizes='(max-width: 800px) calc(100vw - 40px), (max-width: 1340px) 45vw, 588px'
            alt='Glowing crucibles at the laboratory furnace.'
            width='1400'
            height='1090'
          fetchpriority='high'
          />
          <figcaption>
            <span>Material. Preparation. Understanding.</span>
            <span>TTL laboratory archive</span>
          </figcaption>
        </figure>
      </section>
      <section className='site-container service-paths' aria-label='Ways to work with TTL'>
        {[
          [
            '01',
            'Sample preparation & assays',
            'Discuss your sample type, analytical requirements and reporting needs.',
            '/services/assay-lab/',
            'Explore laboratory services',
          ],
          [
            '02',
            'Geological support',
            'Discuss core handling, exploration support and project workspace requirements.',
            '/services/geological-services/',
            'Explore geological support',
          ],
          [
            '03',
            'Project & facility partnerships',
            'Explore a defined test program, an operating collaboration or a facility development opportunity.',
            '/project-opportunities/',
            'Explore an opportunity',
          ],
        ].map(([number, title, copy, path, action]) => (
          <article key={number}>
            <span className='section-number'>{number}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
            <ActionLink secondary to={path}>
              {action}
            </ActionLink>
          </article>
        ))}
      </section>
      <section className='site-container facility-story section-space'>
        <figure>
          <img
            src={ExteriorImage}
            width='650'
            height='340'
            loading='lazy'
            alt='Historic brick buildings beside the water in Cobalt.'
          />
          <figcaption>Cobalt, Ontario · from the TTL archive</figcaption>
        </figure>
        <div>
          <p className='eyebrow'>A real place to begin</p>
          <h2>
            A technical facility.
            <br />A history in the camp.
          </h2>
          <p>
            At 1 Presley Street in Cobalt, TTL brings a laboratory and mineral-testing heritage to
            conversations about the work ahead.
          </p>
          <p>
            Explore the facility, the laboratory spaces and the opportunities for a project-specific program.
          </p>
          <ActionLink secondary to='/about/'>
            Explore the facility
          </ActionLink>
        </div>
      </section>
      <section className='opportunity-band'>
        <div className='site-container opportunity-inner'>
          <div>
            <p className='eyebrow'>Room for the next idea</p>
            <h2>Have a project that needs more than an assay?</h2>
          </div>
          <div>
            <p>
              We welcome discussions with material owners, technical teams and prospective operating partners
              about defined test programs and facility development.
            </p>
            <p className='opportunity-support'>
              Some projects begin with a sample. Others need a longer program, equipment or an operating
              partner. Tell us what you are trying to achieve.
            </p>
            <ActionLink to='/project-opportunities/'>Discuss a project opportunity</ActionLink>
          </div>
        </div>
      </section>
      <section className='site-container section-space'>
        <div className='section-heading'>
          <p className='eyebrow'>From a question to a work plan</p>
          <h2>A practical next step.</h2>
        </div>
        <ProjectSteps />
        <AcceptanceNote />
      </section>
    </Layout>
  );
}
export const Head = () => (
  <SiteHead
    title='Sample preparation, assays & project opportunities in Cobalt'
    description='Discuss sample preparation, assay requirements and mineral project opportunities with Temiskaming Testing Laboratories in Cobalt, Ontario.'
  />
);
