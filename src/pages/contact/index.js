import * as React from 'react';

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
      <div className='grid bg-whiteSmoke py-20 md:py-40'>
        <div className='container mx-auto grid gap-16 px-4 md:px-8 lg:grid-cols-2-1'>
          <div className='rounded-2xl bg-white p-8 shadow-md'>
            <h2 className='mb-4 text-center text-4xl font-bold'>Get in Touch</h2>
            <h5 className='mb-2 text-center text-xl font-bold text-gray'>Any questions or remarks?</h5>
            <p className='mb-8 text-center leading-[1.8] text-gray'>We&apos;ll get back to you within 24 hours.</p>

            <form className='relative grid gap-4' onSubmit={handleSubmit}>
              <div className='flex gap-4 rounded-lg bg-aliceBlue p-4'>
                <User className='size-7 text-primary' strokeWidth='2' />
                <input
                  className='w-full border-0 bg-transparent text-xs text-gray outline-0 placeholder:text-gray'
                  name='name'
                  placeholder='Full Name'
                  required
                />
              </div>

              <div className='flex gap-4 rounded-lg bg-aliceBlue p-4'>
                <Mail className='size-7 text-primary' strokeWidth='2' />
                <input
                  className='w-full border-0 bg-transparent text-xs text-gray outline-0 placeholder:text-gray'
                  name='_replyto'
                  placeholder='Email Address'
                  type='email'
                  required
                />
              </div>

              <div className='flex gap-4 rounded-lg bg-aliceBlue p-4'>
                <Planet className='size-7 text-primary' strokeWidth='2' />
                <input
                  className='w-full border-0 bg-transparent text-xs text-gray outline-0 placeholder:text-gray'
                  name='location'
                  placeholder='Location'
                  required
                />
              </div>

              <div className='flex gap-4 rounded-lg bg-aliceBlue p-4'>
                <MessageText className='size-7 text-primary' strokeWidth='2' />
                <input
                  className='w-full border-0 bg-transparent text-xs text-gray outline-0 placeholder:text-gray'
                  name='subject'
                  placeholder='Subject'
                  required
                />
              </div>

              <textarea
                className='flex min-h-24 w-full rounded-lg border-0 bg-aliceBlue p-4 text-xs text-gray outline-0 placeholder:text-gray'
                name='message'
                placeholder='Enter your message'
                required
              ></textarea>

              <button
                className='mx-auto mt-2 block cursor-pointer rounded-full bg-secondary px-8 py-3 text-lg font-black text-white'
                type='submit'
              >
                Send Message
              </button>

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
          </div>

          <div className='rounded-2xl bg-white p-8 text-center shadow-md'>
            <h2 className='mb-4 text-4xl font-bold'>Contact Details</h2>
            <h5 className='mb-2 text-xl font-bold text-gray'>Have some feedback for us?</h5>
            <p className='mb-8 leading-[1.8] text-gray'>Give us a call or send an email.</p>

            <div className='mb-2 flex flex-col items-center justify-center gap-2 md:flex-row'>
              <User className='size-8 text-primary' strokeWidth='2' />
              <h6 className='font-bold'>
                Anthony Dapaah, PhD, C.Chem.
                <br />
                Laboratory Manager
              </h6>
            </div>

            <div className='mb-2 flex flex-col items-center justify-center gap-2 md:flex-row'>
              <Phone className='size-8 text-primary' strokeWidth='2' />
              <a className='font-bold' href='tel:+5192152995'>
                519-215-2995
              </a>
            </div>

            <div className='flex flex-col items-center justify-center gap-2 md:flex-row'>
              <Mail className='size-8 text-primary' strokeWidth='2' />
              <a className='font-bold' href='mailto:anthony@temiskaminglabs.com'>
                anthony@temiskaminglabs.com
              </a>
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
      <title>Contact | TTL</title>
      <meta name='description' content='Have some feedback for us? Give us a call or send an email.' />
    </>
  );
}
