import * as React from 'react';

import { motion } from 'framer-motion';
import { User, Phone, Mail, Planet, MessageText, CheckCircle, WarningCircle } from 'iconoir-react';

import Layout from '@components/layout';

export default function Contact() {
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('form-name', 'Contact');

    try {
      const response = await fetch('https://formspree.io/f/xqkodqzd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error.message);
      setIsError(true);
    }
  };

  return (
    <Layout>
      <div className='grid bg-tertiary/5 pb-20 pt-44 md:pb-40 md:pt-64'>
        <div className='container mx-auto grid gap-16 px-4 md:px-8 lg:grid-cols-2-1'>
          <motion.div
            className='rounded-2xl bg-white p-8 shadow-md'
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <h1 className='mb-4 text-center text-4xl font-bold'>Get in Touch</h1>
            <p className='mb-2 text-center text-xl font-bold text-tertiary'>Any questions or remarks?</p>
            <p className='mb-8 text-center leading-[1.8] text-tertiary'>We&apos;ll get back to you within 24 hours.</p>

            <form className='relative grid gap-4' onSubmit={handleSubmit}>
              <div className='flex gap-4 rounded-lg bg-primary/10 p-4'>
                <User className='size-7 text-primary' strokeWidth='2' />
                <input
                  className='w-full border-0 bg-transparent text-xs text-tertiary outline-0 placeholder:text-tertiary'
                  name='name'
                  placeholder='Full Name'
                  required
                />
              </div>

              <div className='flex gap-4 rounded-lg bg-primary/10 p-4'>
                <Mail className='size-7 text-primary' strokeWidth='2' />
                <input
                  className='w-full border-0 bg-transparent text-xs text-tertiary outline-0 placeholder:text-tertiary'
                  name='_replyto'
                  placeholder='Email Address'
                  type='email'
                  required
                />
              </div>

              <div className='flex gap-4 rounded-lg bg-primary/10 p-4'>
                <Planet className='size-7 text-primary' strokeWidth='2' />
                <input
                  className='w-full border-0 bg-transparent text-xs text-tertiary outline-0 placeholder:text-tertiary'
                  name='location'
                  placeholder='Location'
                  required
                />
              </div>

              <div className='flex gap-4 rounded-lg bg-primary/10 p-4'>
                <MessageText className='size-7 text-primary' strokeWidth='2' />
                <input
                  className='w-full border-0 bg-transparent text-xs text-tertiary outline-0 placeholder:text-tertiary'
                  name='subject'
                  placeholder='Subject'
                  required
                />
              </div>

              <textarea
                className='flex min-h-24 w-full rounded-lg border-0 bg-primary/10 p-4 text-xs text-tertiary outline-0 placeholder:text-tertiary'
                name='message'
                placeholder='Enter your message'
                required
              ></textarea>

              <motion.button
                className='mx-auto mt-2 block cursor-pointer rounded-full bg-secondary px-8 py-3 text-lg font-black text-white'
                type='submit'
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Send Message
              </motion.button>

              {isSuccess && (
                <div className='absolute left-0 top-0 size-full bg-white/75 p-4'>
                  <CheckCircle className='m-auto size-16 text-primary' strokeWidth='2' />
                </div>
              )}

              {isError && (
                <div className='absolute left-0 top-0 size-full bg-white/75 p-4'>
                  <WarningCircle className='m-auto size-16 text-primary' strokeWidth='2' />
                </div>
              )}
            </form>
          </motion.div>

          <motion.div
            className='rounded-2xl bg-white p-8 text-center shadow-md'
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <h2 className='mb-4 text-4xl font-bold'>Contact Details</h2>
            <p className='mb-2 text-xl font-bold text-tertiary'>Have some feedback for us?</p>
            <p className='mb-8 leading-[1.8] text-tertiary'>Give us a call or send an email.</p>

            <div className='mb-2 flex flex-col items-center justify-center gap-2 md:flex-row'>
              <User className='size-8 text-primary' strokeWidth='2' />
              <p className='font-bold'>
                Laboratory Manager
              </p>
            </div>

            <div className='mb-2 flex flex-col items-center justify-center gap-2 md:flex-row'>
              <Phone className='size-8 text-primary' strokeWidth='2' />
              <a className='font-bold' href='tel:+5192152995'>
                519-215-2995
              </a>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
              <Mail className='size-8 text-primary' strokeWidth='2' />
              <a className='font-bold' href='mailto:aurelian@temiskaminglabs.com'>
                aurelian@temiskaminglabs.com
              </a>
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
      <title>Contact | TTL</title>
      <meta
        name='description'
        content='Temiskaming Testing Labs is a full service assay lab that also offers geological services.'
      />
    </>
  );
}