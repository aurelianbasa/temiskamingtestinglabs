import * as React from 'react';
import { Link } from 'gatsby';

import { motion } from 'framer-motion';

const styles = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
};

export default function Button({ external = false, className, type, text, href }) {
  return (
    <motion.div
      className={`${styles[type]} ${className} rounded-full text-center text-lg font-black text-white`}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      {external && (
        <a className='block px-10 py-3' href={href} target='_blank' rel='noreferrer'>
          {text}
        </a>
      )}

      {!external && (
        <Link className='block px-10 py-3' to={href}>
          {text}
        </Link>
      )}
    </motion.div>
  );
}
