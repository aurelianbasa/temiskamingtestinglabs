import * as React from 'react';

import { motion } from 'framer-motion';

import Layout from '@components/layout';
import Button from '@components/button';
import ContactUsBanner from '@components/contact-us-banner';
import SchedulePDF from '@media/forms/schedule.pdf';
import CreditApplicationPDF from '@media/forms/creditapplication.pdf';
import RequestForAnalysisPDF from '@media/forms/requestforanalysis.pdf';

export default function Forms() {
  return (
    <Layout>
      <div className='grid gap-32 bg-tertiary/5 py-20 md:gap-60 md:py-40'>
        <div className='container mx-auto px-4 md:px-8'>
          <motion.div
            className='rounded-2xl bg-white p-8 text-center shadow-md'
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <h1 className='mb-4 text-3xl font-bold text-primary'>Our Forms for Clients New and Returning</h1>
            <p className='mb-8 text-xl font-bold'>
              All of our forms use PDF Format and require Adobe Acrobat Reader to open.
            </p>
            <div className='flex flex-wrap justify-center gap-8'>
              <Button external type='secondary' text='Request for Analysis' href={RequestForAnalysisPDF} />
              <Button external type='primary' text='Credit Application' href={CreditApplicationPDF} />
              <Button external type='secondary' text='Schedule of Fees' href={SchedulePDF} />
            </div>
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
      <title>Forms | TTL</title>
      <meta
        name='description'
        content='Request for analysis sample submission form and customer business credit application'
      />
    </>
  );
}
