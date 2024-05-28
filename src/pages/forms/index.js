import * as React from 'react';

import Layout from '@components/layout';
import ContactUsBanner from '@components/contact-us-banner';
import SchedulePDF from '@media/forms/schedule.pdf';
import CreditApplicationPDF from '@media/forms/creditapplication.pdf';
import RequestForAnalysisPDF from '@media/forms/requestforanalysis.pdf';

export default function Forms() {
  return (
    <Layout>
      <div className='grid gap-32 bg-whiteSmoke py-20 md:gap-60 md:py-40'>
        <div className='container mx-auto px-4 md:px-8'>
          <div className='rounded-2xl bg-white p-8 text-center shadow-md'>
            <h1 className='mb-4 text-3xl font-bold text-primary'>Our Forms for Clients New and Returning</h1>
            <p className='mb-8 text-xl font-bold'>
              All of our forms use PDF Format and require Adobe Acrobat Reader to open.
            </p>
            <div className='flex flex-wrap justify-center gap-8'>
              <a
                className='self-start rounded-full bg-secondary px-10 py-3 text-lg font-black text-white'
                href={RequestForAnalysisPDF}
                target='_blank'
                rel='noreferrer'
              >
                Request for Analysis
              </a>

              <a
                className='self-start rounded-full bg-primary px-10 py-3 text-lg font-black text-white'
                href={CreditApplicationPDF}
                target='_blank'
                rel='noreferrer'
              >
                Credit Application
              </a>

              <a
                className='self-start rounded-full bg-secondaryLight px-10 py-3 text-lg font-black text-secondary'
                href={SchedulePDF}
                target='_blank'
                rel='noreferrer'
              >
                Schedule of Fees
              </a>
            </div>
          </div>
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
      <meta name='description' content='All of our forms use PDF Format and require Adobe Acrobat Reader to open.' />
    </>
  );
}
