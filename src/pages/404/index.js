import * as React from 'react';
import Button from '@components/button';

import Layout from '@components/layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <div className='bg-tertiary/5 pb-20 pt-44 md:pb-40 md:pt-64'>
        <div className='container mx-auto flex max-w-lg flex-col justify-center gap-8 px-4 text-center md:px-8'>
          <p className='text-2xl font-bold text-tertiary'>404 Page Not Found</p>
          <p className='text-4xl font-bold'>Sorry, this page isn't available.</p>
          <p className='text-xs text-tertiary'>You may have mistyped the address or the page may have moved.</p>
          <Button className='self-center' type='primary' text='Go to Homepage' href='/' />
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
