import React from 'react';

export const Footer = () => {
  return (
    <footer className="p-4 mt-8 text-center text-gray-500 bg-gray-100">
      &copy; {new Date().getFullYear()} Madda Construction Platform. All rights reserved.
    </footer>
  );
};

export default Footer;