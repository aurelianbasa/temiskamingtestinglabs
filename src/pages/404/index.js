import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className='bg-whiteSmoke py-20 md:py-40'>
        <div className='container mx-auto flex max-w-lg flex-col justify-center gap-8 px-4 text-center md:px-8'>
          <p className='text-2xl font-bold text-gray'>404 Page Not Found</p>
          <p className='text-4xl font-bold'>Sorry, this page isn't available.</p>
          <p className='text-xs text-gray'>You may have mistyped the address or the page may have moved.</p>
          <Link className='flex self-center rounded-full bg-primary px-10 py-3 text-lg font-black text-white' to='/'>
            Go to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Page not found</title>
      <meta name='description' content='Page not found.' />
    </>
  );
}
