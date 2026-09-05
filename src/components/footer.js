import * as React from 'react';
import { Link } from 'gatsby';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import logo from '@media/common/logo.svg';
import { DisclaimerText, DisclosureText } from './legal-text';

export default function Footer() {
  const [legal, setLegal] = React.useState(null);
  return (
    <footer className='site-footer'>
      <div className='site-container'>
        <div className='footer-main'>
          <div className='footer-brand'>
            <Link to='/' aria-label='Temiskaming Testing Laboratories — home'>
              <img src={logo} width='140' height='66' alt='TTL' />
            </Link>
            <p>
              Temiskaming Testing Laboratories
              <br />
              Cobalt, Ontario
            </p>
          </div>
          <div>
            <h2>Start a conversation</h2>
            <a href='mailto:aurelian@temiskaminglabs.com'>aurelian@temiskaminglabs.com</a>
            <a href='tel:+17056795500'>+1 (705) 679-5500</a>
            <address>
              1 Presley Street
              <br />
              Cobalt, ON P0J 1C0
            </address>
          </div>
          <nav aria-label='Footer navigation'>
            <h2>Explore TTL</h2>
            <Link to='/services/assay-lab/'>Laboratory services</Link>
            <Link to='/about/'>The facility</Link>
            <Link to='/project-opportunities/'>Project opportunities</Link>
            <Link to='/forms/'>Sample information</Link>
            <Link to='/contact/'>Contact</Link>
          </nav>
          <div>
            <h2>Follow TTL</h2>
            <a href='https://ca.linkedin.com/company/temiskaming-testing-labs/'>LinkedIn ↗</a>
            <a href='https://twitter.com/temiskaminglabs/'>X (Twitter) ↗</a>
            <a href='https://www.facebook.com/temiskamingtestinglabs/'>Facebook ↗</a>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>© {new Date().getFullYear()} Temiskaming Testing Laboratories</p>
          <div>
            <Link to='/privacy/'>Privacy</Link>
            <button onClick={() => setLegal('Disclaimer')}>Disclaimer</button>
            <button onClick={() => setLegal('Disclosure')}>Disclosure</button>
          </div>
          <a href='https://www.resourceactive.com/documentation'>Site by Resource Active ↗</a>
        </div>
      </div>
      <Dialog open={Boolean(legal)} onClose={() => setLegal(null)} className='legal-dialog'>
        <div className='dialog-backdrop' />
        <div className='legal-dialog-position'>
          <DialogPanel className='legal-panel'>
            <div className='legal-heading'>
              <DialogTitle>{legal}</DialogTitle>
              <button
                className='close-button'
                onClick={() => setLegal(null)}
                aria-label='Close legal information'
              >
                Close <span aria-hidden='true'>×</span>
              </button>
            </div>
            {legal === 'Disclaimer' ? <DisclaimerText /> : <DisclosureText />}
          </DialogPanel>
        </div>
      </Dialog>
    </footer>
  );
}
