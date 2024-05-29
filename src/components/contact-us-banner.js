import * as React from 'react';

import { motion } from 'framer-motion';

import Button from '@components/button';
import FactoryImage from '@media/common/factory.jpg';

export default function ContactUsBanner() {
  return (
    <motion.div
      style={{ '--bg-image-url': `url(${FactoryImage})` }}
      className={`bg-[image:var(--bg-image-url)] bg-cover bg-center `}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.2 }}
      initial={{ y: '80px', opacity: 0 }}
      whileInView={{ y: '0', opacity: 1 }}
    >
      <div className='flex min-h-[80vh] justify-center bg-gradient-to-r from-primary/75 to-quaternary/75'>
        <div className='container mx-auto flex flex-col justify-center px-8 text-center'>
          <div className='mb-4 self-center bg-quaternary px-2 py-1'>
            <p className='text-2xl font-bold text-white'>Schedule a Consultation</p>
          </div>
          <h2 className='mb-8 text-3xl font-bold text-white'>Make your impact by mastering your material.</h2>

          <Button className='self-center' type='secondary' text='Contact Us' href='/contact' />
        </div>
      </div>
    </motion.div>
  );
}
