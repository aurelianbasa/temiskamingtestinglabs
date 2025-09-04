import * as React from 'react';

import { motion } from 'framer-motion';

import Layout from '@components/layout';
import Button from '@components/button';

import MapImage from '@media/about/map.webp';
import HeroImage from '@media/about/hero.webp';

export default function About() {
  return (
    <Layout>
      <div className='grid gap-32 pt-44 md:gap-60 md:pt-64'>
        <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <img className='rounded-2xl' src={HeroImage} alt='Factory building' />
          </motion.div>

          <motion.div
            className='flex flex-col'
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <p className='mb-8 text-2xl font-bold text-primary'>ABOUT US</p>
            <h1 className='mb-10 text-5xl font-bold'>Overview</h1>
            <p className='mb-8 text-xl font-bold leading-normal text-tertiary'>
              We are a team of mining and geotechnical experts with deep roots in the area. The facility known as
              Temiskaming Testing Labs is based in the historic town of Cobalt and has built a reputation around its
              processing of local ores, particularly silver ores.
            </p>

            <Button className='self-start' type='primary' text='Contact Us' href='/contact' />
          </motion.div>
        </div>

        <div className='grid gap-32 bg-tertiary/5 py-20 md:py-40'>
          <div className='container mx-auto grid gap-16 px-4 md:px-8 lg:grid-cols-4-6'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ x: '-80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
            >
              <p className='mb-4 text-2xl font-bold text-primary'>A Public Initiative</p>
              <h2 className='text-3xl font-bold leading-normal'>Founded to Support Local Mine Operators</h2>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
            >
              <p className='leading-[1.8] text-tertiary'>
                The Ontario Department of Mines established the Temiskaming Testing Laboratory in 1921 to serve local
                mine operators. Since few of the mining operations were large enough to justify their own assay office
                and specialized equipment, it was decided the provincical government should build and manage the
                service.
                <br />
                <br /> The facility was extensively renovated and updated over the years by the Ministry of Northern
                Development & Mines as a technically advanced bulk sampling and testing station for minerals and
                precious metals. By the 1990s the operation was decommissioned due to a decrease in Silver mining in the
                area.
              </p>
            </motion.div>
          </div>

          <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-2'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ x: '-80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
            >
              <p className='mb-4 text-2xl font-bold text-tertiary'>IN THE HEART OF THE CAMP</p>
              <h2 className='mb-8 text-4xl font-bold leading-normal'>Independently Operated</h2>
              <p className='leading-[1.8] text-tertiary'>
                The perennial difficulty of timely assay results motivated the acquisition in the short term. The longer
                term implications expand operational capability for a series of projects in the camp, and have the
                benefit of contributing to the local economy.
              </p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
            >
              <img className='rounded-2xl' src={MapImage} alt='Map' />
            </motion.div>
          </div>

          <motion.div
            className='mx-auto w-full max-w-[1410px] rounded-[2rem] bg-quaternary px-8 py-16'
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <div className='container mx-auto grid items-center gap-16 lg:grid-cols-4-6'>
              <div className='flex flex-col'>
                <p className='mb-4 text-2xl font-bold text-primary'>Our Approach to Mining</p>
                <h2 className='mb-8 text-3xl font-bold leading-normal text-white'>
                  Securing the Facility was a Strategic decision to consolidate the camp
                </h2>

                <Button
                  external
                  className='self-start'
                  type='secondary'
                  text='Schedule a Consultation'
                  href='mailto:aurelian@temiskaminglabs.com'
                />
              </div>

              <p className='text-xl font-bold leading-normal text-white'>
                PolyMet Labs first purchased the facility in 2000 and began operating as an Assay Laboratory, and Bulk
                Sampling, Crushing, Grinding, Processing, Upgrading, and Smelting Plant. When the facility changed
                ownership in 2020 it was relaunched as Temiskaming Testing Laboratories Inc.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>About | TTL</title>
      <meta
        name='description'
        content='We are a team of mining and geotechnical experts with deep roots in the area. The facility known as Temiskaming Testing Labs is based in the historic town of Cobalt.'
      />
    </>
  );
}