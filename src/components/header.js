import * as React from 'react';
import { Link } from 'gatsby';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Popover,
  PopoverButton,
  PopoverPanel,
  CloseButton,
} from '@headlessui/react';
import logo from '@media/common/logo.svg';

const navigation = [
  ['Facility', '/about/'],
  ['Project opportunities', '/project-opportunities/'],
  ['Sample information', '/forms/'],
];
export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <a className='skip-link' href='#main-content'>
        Skip to content
      </a>
      <header className='site-header'>
        <div className='site-container header-inner'>
          <Link className='brand' to='/' aria-label='Temiskaming Testing Laboratories — home'>
            <img src={logo} width='130' height='52' alt='TTL' />
            <span>
              Temiskaming
              <br />
              Testing Laboratories
            </span>
          </Link>
          <nav className='desktop-nav' aria-label='Main navigation'>
            <Popover className='services-menu'>
              <PopoverButton className='nav-button'>
                Laboratory services <span aria-hidden='true'>⌄</span>
              </PopoverButton>
              <PopoverPanel className='services-panel'>
                <CloseButton as={Link} to='/services/assay-lab/'>
                  Sample preparation & assays
                </CloseButton>
                <CloseButton as={Link} to='/services/geological-services/'>
                  Geological support
                </CloseButton>
              </PopoverPanel>
            </Popover>
            {navigation.map(([label, path]) => (
              <Link key={path} to={path} activeClassName='nav-active'>
                {label}
              </Link>
            ))}
            <Link className='header-contact' to='/contact/' activeClassName='nav-active'>
              Contact <span aria-hidden='true'>↗</span>
            </Link>
          </nav>
          <button
            className='menu-toggle'
            type='button'
            onClick={() => setIsOpen(true)}
            aria-label='Open menu'
            aria-expanded={isOpen}
          >
            <span>Menu</span>
            <span className='menu-lines' aria-hidden='true'>
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
      <Dialog open={isOpen} onClose={setIsOpen} className='mobile-dialog'>
        <div className='dialog-backdrop' aria-hidden='true' />
        <div className='mobile-dialog-position'>
          <DialogPanel className='mobile-panel'>
            <div className='mobile-menu-top'>
              <DialogTitle>Explore TTL</DialogTitle>
              <button
                type='button'
                className='close-button'
                onClick={() => setIsOpen(false)}
                aria-label='Close menu'
              >
                Close <span aria-hidden='true'>×</span>
              </button>
            </div>
            <nav aria-label='Mobile navigation'>
              {[
                ['Home', '/'],
                ['Sample preparation & assays', '/services/assay-lab/'],
                ['Geological support', '/services/geological-services/'],
                ...navigation,
                ['Contact', '/contact/'],
              ].map(([label, path]) => (
                <Link key={path} to={path} activeClassName='nav-active' onClick={() => setIsOpen(false)}>
                  {label}
                  <span aria-hidden='true'>↗</span>
                </Link>
              ))}
            </nav>
            <div className='mobile-contact'>
              <p>Cobalt, Ontario</p>
              <a href='tel:+17056795500'>(705) 679-5500</a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
