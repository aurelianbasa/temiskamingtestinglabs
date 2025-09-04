import * as React from 'react';

import { motion } from 'framer-motion';

import Layout from '@components/layout';
import Button from '@components/button';
import HeroImage from '@media/services/assay-lab/hero.webp';
import ContactUsBanner from '@components/contact-us-banner';

export default function AssayLab() {
  return (
    <Layout>
      <div className='grid gap-32 bg-tertiary/5 pb-20 pt-44 md:gap-60 md:pb-40 md:pt-64'>
        <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <p className='mb-8 text-2xl font-bold text-primary'>ASSAY LAB</p>
            <h1 className='mb-10 text-5xl font-bold'>Overview</h1>
            <p className='mb-8 text-xl font-bold leading-normal text-tertiary'>
              Temiskaming Testing Laboratories (TTL) Geochemistry Department offers a suite of assay/geochemical
              analytical services including but not limited to determination of precious metals (Au, Ag) by fire assay
              with instrumental and/or gravimetric finish. Further services will be added in the near future.
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <img className='w-full rounded-2xl' src={HeroImage} alt='Temiskaming Testing Laboratories' />
          </motion.div>
        </div>

        <motion.div
          className='mx-auto w-full max-w-[1410px] rounded-[2rem] bg-quaternary px-8 py-16'
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
        >
          <div className='container mx-auto grid items-center gap-8 lg:grid-cols-4-6'>
            <div className='flex flex-col'>
              <p className='mb-4 text-2xl font-bold text-primary'>Sample Preparation</p>
              <h2 className='mb-8 text-3xl font-bold leading-normal text-white'>
                The preparation of a sample is the most critical facet in the analysis of geological materials.
              </h2>

              <Button
                external
                className='self-start'
                type='secondary'
                text='Schedule a Consultation'
                href='mailto:aurelian@temiskaminglabs.com'
              />
            </div>
            <div>
              <p className='mb-4 leading-[1.8] text-white'>
                It entails the crushing of all the sample, riffle splitting to obtain a sub-sample (typically, 250 g)
                that represents the entire sample followed by pulverization for subsequent analysis.
                <br />
                <br />
                TTL maintains a stringent QA/QC protocol to ensure the integrity of the sample is not compromised. Jaw
                crushers and pulverizer bowls are frequently cleaned with barren material to bring sample contamination
                to the barest minimum. A portion of pulverized barren material is tested to monitor contamination and
                the remainder kept for future analysis if necessary. For every 20 samples, sample duplicate is created
                at the riffle splitting step and sample replicate created by taking an aliquot from the same pulp bag
                during the weighing process.
              </p>
            </div>
          </div>
        </motion.div>

        <div className='container mx-auto items-center gap-16 px-4 md:px-8'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <h2 className='mb-8 text-4xl font-bold leading-normal text-primary'>PRECIOUS METALS ANALYSES</h2>
            <p className='mb-4 text-xl font-bold leading-normal text-tertiary'>
              Lead Collection Fire Assay with AAS/Gravimetric Finish
            </p>
            <p className='mb-2 text-xl font-bold leading-normal text-tertiary'>
              Classical fire assay using lead oxide-based flux is employed to separate and collect the precious metals
              from the sample matrix (gangue), followed by cupellation to separate the precious metals from lead. The
              silver bead/prill so obtained is digested with HNO3/HCl and subsequently analyzed by AAS. For gravimetric
              finish, the silver bead is digested with dilute HNO3, the Au is washed, dried, annealed and weighed.
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <h3 className='my-12 text-center text-3xl font-bold leading-normal'>FIRE ASSAY-AAS FINISH</h3>

            <table className='block w-full rounded-2xl bg-white p-4 text-center shadow-md md:p-8'>
              <thead className='block'>
                <tr className='grid grid-cols-5 border-b-4 border-tertiary text-xs'>
                  <th className='py-4'>Code</th>
                  <th className='border-l border-tertiary py-4'>Analyte</th>
                  <th className='border-l border-tertiary py-4'>Detection Limit (µg/g)</th>
                  <th className='border-l border-tertiary py-4'>Upper Limit (µg/g)</th>
                  <th className='border-l border-tertiary py-4'>Sample Weight (g)</th>
                </tr>
              </thead>
              <tbody className='block'>
                <tr className='grid grid-cols-5 text-xs'>
                  <td className='border-tertiary py-4'>FA301-AA</td>
                  <td className='border-l border-tertiary py-4'>Au</td>
                  <td className='border-l border-tertiary py-4'>0.005</td>
                  <td className='border-l border-tertiary py-4'>10</td>
                  <td className='border-l border-tertiary py-4'>30</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <h3 className='my-12 text-center text-3xl font-bold leading-normal'>FIRE ASSAY-GRAVIMETRIC FINISH</h3>

            <table className='block w-full rounded-2xl bg-white p-4 text-center shadow-md md:p-8'>
              <thead className='block'>
                <tr className='grid grid-cols-5 border-b-4 border-tertiary text-xs'>
                  <th className='py-4'>Code</th>
                  <th className='border-l border-tertiary py-4'>Analyte</th>
                  <th className='border-l border-tertiary py-4'>Detection Limit (µg/g)</th>
                  <th className='border-l border-tertiary py-4'>Upper Limit (µg/g)</th>
                  <th className='border-l border-tertiary py-4'>Sample Weight (g)</th>
                </tr>
              </thead>
              <tbody className='block'>
                <tr className='grid grid-cols-5 border-b-4 border-tertiary text-xs'>
                  <td className='border-tertiary py-4'>FA301-GR</td>
                  <td className='border-l border-tertiary py-4'>Au</td>
                  <td className='border-l border-tertiary py-4'>0.035</td>
                  <td className='border-l border-tertiary py-4'>-</td>
                  <td className='border-l border-tertiary py-4'>30</td>
                </tr>
                <tr className='grid grid-cols-5 pb-8 text-xs'>
                  <td className='border-tertiary py-4'>FA303-GR</td>
                  <td className='border-l border-tertiary py-4'>Ag</td>
                  <td className='border-l border-tertiary py-4'>3.50</td>
                  <td className='border-l border-tertiary py-4'>-</td>
                  <td className='border-l border-tertiary py-4'>30</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>

        <ContactUsBanner />
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Assay Lab | TTL</title>
      <meta
        name='description'
        content='Temiskaming Testing Labs is a full service assay lab that also offers geological services.'
      />
    </>
  );
}
