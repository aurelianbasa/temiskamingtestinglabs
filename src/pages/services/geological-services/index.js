import * as React from 'react';

import { AnimatePresence, easeOut, motion } from 'framer-motion';
import { CheckCircle, MapPin, GraphUp, NavArrowLeft } from 'iconoir-react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import Layout from '@components/layout';
import ContactUsBanner from '@components/contact-us-banner';
import OverviewImage from '@media/services/geological-services/overview.webp';

export default function GeologicalServices() {
  return (
    <Layout>
      <div className='grid gap-32 bg-tertiary/5 pb-20 pt-44 md:gap-60 md:pb-40 md:pt-64'>
        <div className='container mx-auto px-4 text-center md:px-8'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <p className='mb-8 text-2xl font-bold text-primary'>GEOLOGICAL SERVICES</p>
            <h1 className='text-5xl font-bold'>The One-stop Shop</h1>
          </motion.div>

          <motion.div
            className='my-24 grid justify-center gap-8 sm:grid-cols-2 lg:mx-32 lg:grid-cols-3'
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <div className='flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-md'>
              <CheckCircle className='size-16 text-secondary' strokeWidth='2' />
              <p className='text-xl font-bold text-tertiary'>SETUP</p>
              <p className='text-xl font-bold'>The Right Foundations</p>
            </div>

            <div className='flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-md'>
              <MapPin className='size-16 text-secondary' strokeWidth='2' />
              <p className='text-xl font-bold text-tertiary'>FIELD WORK</p>
              <p className='text-xl font-bold'>Get Boots on the Ground</p>
            </div>

            <div className='flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-md'>
              <GraphUp className='size-16 text-secondary' strokeWidth='2' />
              <p className='text-xl font-bold text-tertiary'>ANALYTICS</p>
              <p className='text-xl font-bold'>Extract Value from Your Data</p>
            </div>
          </motion.div>

          <div className='grid gap-8 text-left'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
            >
              <Disclosure as='div' className='rounded-2xl bg-white shadow-md'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='group flex w-full items-center justify-between gap-4 px-4 py-6 text-4xl font-bold'>
                      <div className='flex gap-4'>
                        <CheckCircle className='m-2 size-6 text-primary' strokeWidth='2' />
                        SETUP
                      </div>
                      <NavArrowLeft className='m-2 size-6 group-data-[open]:-rotate-90' strokeWidth='2' />
                    </DisclosureButton>
                    <div className='overflow-hidden'>
                      <AnimatePresence>
                        {open && (
                          <DisclosurePanel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.2, ease: easeOut }}
                            className='grid gap-10 px-16 pb-10 pt-6'
                          >
                            <p className='text-2xl font-bold'>✔ Building the Initial Geological File Structure</p>
                            <p className='text-2xl font-bold'>
                              ✔ Operating Procedures, Health and Safety Certification
                            </p>
                            <p className='text-2xl font-bold'>✔ Permit Applications and Claim Management</p>
                            <p className='text-2xl font-bold'>✔ Indigenous Consultation and ESG Reporting</p>
                          </DisclosurePanel>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </Disclosure>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
            >
              <Disclosure as='div' className='rounded-2xl bg-white shadow-md'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='group flex w-full items-center justify-between gap-4 px-4 py-6 text-4xl font-bold'>
                      <div className='flex gap-4'>
                        <MapPin className='m-2 size-6 text-primary' strokeWidth='2' />
                        FIELD WORK
                      </div>
                      <NavArrowLeft className='m-2 size-6 group-data-[open]:-rotate-90' strokeWidth='2' />
                    </DisclosureButton>
                    <div className='overflow-hidden'>
                      <AnimatePresence>
                        {open && (
                          <DisclosurePanel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.2, ease: easeOut }}
                            className='grid gap-10 px-16 pb-10 pt-6'
                          >
                            <p className='text-2xl font-bold'>⌖ Strip, Trench, Pressure Wash and Create Drill Pads</p>
                            <p className='text-2xl font-bold'>⌖ Geological Mapping, Sample Taking, and Prospecting</p>
                            <p className='text-2xl font-bold'>⌖ Drillhole Targets, Program Planning and 3d modelling</p>
                            <p className='text-2xl font-bold'>
                              ⌖ Geological logging with Drillcore transport and storage
                            </p>
                          </DisclosurePanel>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </Disclosure>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
            >
              <Disclosure as='div' className='rounded-2xl bg-white shadow-md'>
                {({ open }) => (
                  <>
                    <DisclosureButton className='group flex w-full items-center justify-between gap-4 px-4 py-6 text-4xl font-bold'>
                      <div className='flex gap-4'>
                        <GraphUp className='m-2 size-6 text-primary' strokeWidth='2' />
                        ANALYTICS
                      </div>
                      <NavArrowLeft className='m-2 size-6 group-data-[open]:-rotate-90' strokeWidth='2' />
                    </DisclosureButton>
                    <div className='overflow-hidden'>
                      <AnimatePresence>
                        {open && (
                          <DisclosurePanel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.2, ease: easeOut }}
                            className='grid gap-10 px-16 pb-10 pt-6'
                          >
                            <p className='text-2xl font-bold'>➜ Data Entry, Digitizing and Georeferencing</p>
                            <p className='text-2xl font-bold'>
                              ➜ Data collection procedure review with recommendations
                            </p>
                            <p className='text-2xl font-bold'>➜ Use geological information to build databases</p>
                            <p className='text-2xl font-bold'>➜ QA/QC Program design and implementation</p>
                          </DisclosurePanel>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                )}
              </Disclosure>
            </motion.div>
          </div>
        </div>

        <div className='container mx-auto grid items-center gap-16 px-4 md:px-8 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <img className='w-full rounded-2xl' src={OverviewImage} alt='Geological exploration' />
          </motion.div>

          <motion.div
            className='flex flex-col'
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <h2 className='mb-10 text-5xl font-bold'>A Stake in Exploration</h2>
            <p className='mb-4 text-xl font-bold leading-normal'>
              We have the equipment to get the job done. We provide the full suite of servivces needed on-site for an
              active exploration program, and we help you analyze the data so you can leverage the insights.
            </p>
            <p className='text-xl font-bold leading-normal text-tertiary'>
              We maintain a well-equipped coreshack on Highway 11 in Coleman with corefarm, logging space, cutshack, and
              office space. Our staff has access to forklifts and other conveniences.
            </p>
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
      <title>Geological Services | TTL</title>
      <meta
        name='description'
        content='We provide the full suite of servivces needed on-site for an active exploration program, and we help you analyze the data so you can leverage the insights.'
      />
    </>
  );
}
