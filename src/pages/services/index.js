import * as React from 'react';

import { TestTube, Flask, Industry, Commodity, MoneySquare, GraphUp } from 'iconoir-react';

import Layout from '@components/layout';
import ContactUsBanner from '@components/contact-us-banner';
import FeatureOneImage from '@media/services/feature-one.webp';

export default function Services() {
  return (
    <Layout>
      <div className='grid gap-32 bg-whiteSmoke py-20 md:gap-60 md:py-40'>
        <div className='container mx-auto px-4 text-center md:px-8'>
          <p className='mb-8 text-2xl font-bold text-primary'>Our Services</p>
          <h1 className='mb-12 text-5xl font-bold'>More than just a Lab.</h1>
          <p className='text-gray'>We provide a full suite of services to analyze your material</p>

          <div className='mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md'>
              <TestTube className='size-16 text-secondary' strokeWidth='2' />
              <p className='text-xl font-bold text-gray'>Assay</p>
              <p className='text-xl font-bold'>Laboratory</p>
              <p className='text-xs leading-[1.8] text-gray'>
                Experienced operators can perform both Wet and Fire assays.
              </p>
            </div>

            <div className='flex flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md'>
              <Flask className='size-16 text-primary' strokeWidth='2' />
              <p className='text-xl font-bold text-gray'>Bulk Sampling</p>
              <p className='text-xl font-bold'>Custom Milling</p>
              <p className='text-xs leading-[1.8] text-gray'>
                Our integrated circuit allows full customization of your material.
              </p>
            </div>

            <div className='flex flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md'>
              <Industry className='size-16 text-primary' strokeWidth='2' />
              <p className='text-xl font-bold text-gray'>Crushing</p>
              <p className='text-xl font-bold'>Grinding</p>
              <p className='text-xs leading-[1.8] text-gray'>
                We operate both Cone and Jaw crushers with a series of mesh filters.
              </p>
            </div>

            <div className='flex flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md'>
              <Commodity className='size-16 text-secondary' strokeWidth='2' />
              <p className='text-xl font-bold text-gray'>Smelting</p>
              <p className='text-xl font-bold'>Plant</p>
              <p className='text-xs leading-[1.8] text-gray'>
                Our Furnace is capable of producing bullion and other types of pours.
              </p>
            </div>
          </div>
        </div>

        <div className='container mx-auto grid items-center gap-16 px-4 md:grid-cols-2 md:px-8'>
          <img className='rounded-2xl' src={FeatureOneImage} alt='Feature one' />

          <div>
            <p className='mb-6 text-2xl font-bold text-secondary'>Unlimited Possibilities</p>
            <h2 className='mb-10 text-4xl font-bold'>Our Milling Circuit</h2>
            <p className='leading-[1.8] text-gray'>
              Years of experience and upgrading have cemented the reputation of Temiskaming Testing Laboratories as a
              premier service provider in the treatment of precious metal and base metal ores.
            </p>
          </div>
        </div>

        <ContactUsBanner />

        <div className='container mx-auto px-4 text-center md:px-8'>
          <p className='mb-8 text-2xl font-bold text-secondary'>We Are Here To Help You</p>
          <h1 className='mb-12 text-5xl font-bold'>About Our Services</h1>
          <p className='text-gray'>We provide custom solutions to all levels of operations.</p>

          <div className='mt-12 grid gap-x-20 gap-y-8 text-left md:grid-cols-2'>
            <div className='mt-8 flex items-start gap-6'>
              <div className='rounded-2xl bg-white p-4'>
                <GraphUp className='size-8 text-primary' strokeWidth='2' />
              </div>
              <div>
                <p className='mb-2 text-xl font-bold'>Why custom milling?</p>
                <p className='text-xs leading-[1.8] text-gray'>
                  From analyzing your material we can tailor a testing and processing solution you can use to inform
                  your exploration and development programs.
                </p>
              </div>
            </div>

            <div className='mt-8 flex items-start gap-6'>
              <div className='rounded-2xl bg-white p-4'>
                <MoneySquare className='size-8 text-primary' strokeWidth='2' />
              </div>
              <div>
                <p className='mb-2 text-xl font-bold'>What are the advantages to bulk sampling?</p>
                <p className='text-xs text-gray'>
                  When done effectively it can cut down overall costs significantly by quantifying the value of a
                  deposit, and provide better quality control.
                </p>
              </div>
            </div>

            <div className='mt-8 flex items-start gap-6'>
              <div className='rounded-2xl bg-white p-4'>
                <Industry className='size-8 text-primary' strokeWidth='2' />
              </div>
              <div>
                <p className='mb-2 text-xl font-bold'>What materials can the facility process?</p>
                <p className='text-xs leading-[1.8] text-gray'>
                  Recent renovation has upgraded the facility to process both precious and base metals.
                </p>
              </div>
            </div>

            <div className='mt-8 flex items-start gap-6'>
              <div className='rounded-2xl bg-white p-4'>
                <Commodity className='size-8 text-primary' strokeWidth='2' />
              </div>
              <div>
                <p className='mb-2 text-xl font-bold'>What are some examples of end products?</p>
                <p className='text-xs text-gray'>
                  Silver and Gold bullion has been poured from both primary and secondary sources.
                </p>
              </div>
            </div>
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
      <title>Services | TTL</title>
      <meta
        name='description'
        content='More than just a Lab. We provide a full suite of services to analyze your material.'
      />
    </>
  );
}
