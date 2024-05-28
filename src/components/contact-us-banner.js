import * as React from 'react';
import { Link } from 'gatsby';

import FactoryImage from '@media/common/factory.jpg';

export default function ContactUsBanner() {
  return (
    <div
      style={{ '--bg-image-url': `url(${FactoryImage})` }}
      className={`bg-[image:var(--bg-image-url)] bg-cover bg-center `}
    >
      <div className='flex min-h-[80vh] justify-center bg-gradient-to-r from-primary/75 to-dark/75'>
        <div className='container mx-auto flex flex-col justify-center px-8 text-center'>
          <div className='mb-4 self-center bg-dark px-2 py-1'>
            <p className='text-2xl font-bold text-white'>Schedule a Consultation</p>
          </div>
          <h2 className='mb-8 text-3xl font-bold text-white'>Make your impact by mastering your material.</h2>

          <Link
            className='self-center rounded-full bg-secondary px-10 py-3 text-lg font-black text-white'
            to='/contact'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
