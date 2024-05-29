import * as React from 'react';

import { motion } from 'framer-motion';
import { TestTube, Hammer } from 'iconoir-react';

import Layout from '@components/layout';
import HeroImage from '@media/home/hero.webp';
import PrepLabImage from '@media/home/prep-lab.webp';
import WetAssayImage from '@media/home/wet-assay.webp';
import AssayLabImage from '@media/home/assay-lab.webp';
import FireAssayImage from '@media/home/fire-assay.webp';

export default function Home() {
  return (
    <Layout>
      <div className='grid gap-32 py-20 md:gap-60 md:py-40'>
        <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-4-6'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <h1 className='mb-8 text-5xl font-bold leading-normal'>
              <span className='text-primary'>Fast Turnaround</span> with Competitive Pricing
            </h1>
            <p className='text-xl font-bold'>
              Temiskaming Testing Labs is a full service assay lab that also offers geological services.
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <img className='w-full rounded-2xl' src={HeroImage} alt='Factory building' />
          </motion.div>
        </div>

        <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <img className='self-center rounded-2xl' src={AssayLabImage} alt='Assay lab' />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <p className='mb-4 text-2xl font-bold text-tertiary'>OUR FACILITY</p>
            <h2 className='mb-8 text-4xl font-bold leading-normal'>Temiskaming Testing Laboratories</h2>
            <p className='font-bold'>
              The assay lab is housed in the former regional office of the Ministry of Mines. An expanded suite of
              exploration and analytical services are also offered through a geological office along the Trans-Canada
              highway.
            </p>

            <div className='mt-8 flex items-start gap-4'>
              <div className='rounded-2xl bg-primary/80 p-4'>
                <TestTube className='size-8' strokeWidth='2' />
              </div>
              <div>
                <p className='mb-2 text-xl font-bold text-tertiary'>Assay Lab</p>
                <p className='text-tertiary'>Operated independently with commercial analytical experience.</p>
              </div>
            </div>

            <div className='mt-8 flex items-start gap-4'>
              <div className='rounded-2xl bg-secondary/80 p-4'>
                <Hammer className='size-8' strokeWidth='2' />
              </div>
              <div>
                <p className='mb-2 text-xl font-bold text-tertiary'>Geological Services</p>
                <p className='text-tertiary'>
                  Our team is well equipped to provide exploration and analytical services to the entire region.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='container mx-auto px-4 md:px-8'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <h2 className='mb-16 text-center text-5xl font-bold text-tertiary'>Assay Lab</h2>
          </motion.div>

          <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
            <motion.div
              className='rounded-2xl p-4 shadow-md'
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
            >
              <img className='w-full rounded-2xl' src={PrepLabImage} alt='Prep Lab' />
              <p className='p-8 text-center text-2xl font-bold'>Prep Lab</p>
            </motion.div>

            <motion.div
              className='rounded-2xl p-4 shadow-md'
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
            >
              <img className='w-full rounded-2xl' src={WetAssayImage} alt='Wet Assay' />
              <p className='p-8 text-center text-2xl font-bold'>Wet Assay</p>
            </motion.div>

            <motion.div
              className='rounded-2xl p-4 shadow-md'
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
            >
              <img className='w-full rounded-2xl' src={FireAssayImage} alt='Fire Assay' />
              <p className='p-8 text-center text-2xl font-bold'>Fire Assay</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Home | TTL</title>
      <meta
        name='description'
        content='Temiskaming Testing Labs is a full service assay lab that also offers geological services.'
      />
    </>
  );
}
