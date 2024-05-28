import * as React from 'react';
import { Link } from 'gatsby';

import { AnimatePresence, motion } from 'framer-motion';
import { NavArrowDown, Menu, Xmark } from 'iconoir-react';
import { Popover, PopoverButton, PopoverPanel, Dialog, DialogPanel } from '@headlessui/react';

import logo from '@media/common/logo.svg';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrollYPosition, setScrollYPosition] = React.useState(0);

  function handleScroll() {
    const newScrollYPosition = window.scrollY;
    setScrollYPosition(newScrollYPosition);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ease-linear ${
          scrollYPosition > 0 ? 'shadow-md' : ''
        }`}
      >
        <div className='container mx-auto p-4 md:px-8'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <Link to='/'>
                <img className='w-24 min-w-32 sm:w-40 sm:min-w-32' src={logo} alt='Logo' />
              </Link>
              <p className='ml-4 border-l-[3px] border-grayLigher px-4 text-sm font-bold text-gray'>
                Temiskaming
                <br /> Testing
                <br /> Labs
              </p>
            </div>

            <div className='hidden gap-4 lg:flex'>
              <Link className='py-4 text-xl font-bold hover:text-primary' to='/'>
                Home
              </Link>
              <Link className='py-4 text-xl font-bold hover:text-primary' to='/about'>
                About
              </Link>
              <Link className='py-4 text-xl font-bold hover:text-primary' to='/forms'>
                Forms
              </Link>

              <Popover>
                <PopoverButton className='relative'>
                  {({ hover }) => (
                    <>
                      <div className='flex items-center gap-1'>
                        <Link className='py-4 text-xl font-bold hover:text-primary' to='/services'>
                          Services
                        </Link>
                        <NavArrowDown className='size-5' strokeWidth='2' />
                      </div>
                      {hover && (
                        <AnimatePresence>
                          <PopoverPanel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className='absolute left-1/2 z-50 flex w-max -translate-x-1/2 !transform flex-col gap-4 rounded-lg bg-white p-6 shadow-md'
                          >
                            <Link className='py-1 text-xl font-bold hover:text-primary' to='/services/assay-lab'>
                              Assay Lab
                            </Link>
                            <Link
                              className='py-1 text-xl font-bold hover:text-primary'
                              to='/services/geological-services'
                            >
                              Geological Services
                            </Link>
                          </PopoverPanel>
                        </AnimatePresence>
                      )}
                    </>
                  )}
                </PopoverButton>
              </Popover>

              <Link
                className='flex self-center rounded-full bg-secondary px-5 py-3 font-black text-white'
                to='/contact'
              >
                Contact Us
              </Link>
            </div>

            <button className='mx-2 lg:hidden' onClick={() => setIsOpen(true)}>
              <Menu className='size-7 text-gray' strokeWidth='3' />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/75'
            />
            <div className='fixed inset-0 flex w-screen items-center justify-end'>
              <DialogPanel
                as={motion.div}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{
                  ease: 'linear',
                }}
                className='relative flex size-full max-w-lg flex-col items-start bg-white p-12'
              >
                <Link className='py-2 text-xl font-bold hover:text-primary' to='/'>
                  Home
                </Link>
                <Link className='py-2 text-xl font-bold hover:text-primary' to='/about'>
                  About
                </Link>
                <Link className='py-2 text-xl font-bold hover:text-primary' to='/forms'>
                  Forms
                </Link>
                <Link className='py-2 text-xl font-bold hover:text-primary' to='/services'>
                  Services
                </Link>
                <Link className='py-2 pl-6 text-lg font-bold hover:text-primary' to='/services/assay-lab'>
                  Assay Lab
                </Link>
                <Link className='py-2 pl-6 text-lg font-bold hover:text-primary' to='/services/geological-services'>
                  Geological Services
                </Link>
                <Link
                  className='mt-auto w-full rounded-full bg-secondary px-5 py-3 text-center font-black text-white'
                  to='/contact'
                >
                  Contact Us
                </Link>

                <button className='absolute right-8 top-8' onClick={() => setIsOpen(false)}>
                  <Xmark className='size-7' strokeWidth='2' />
                </button>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
