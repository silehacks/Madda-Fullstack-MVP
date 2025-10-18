import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/">Madda</Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;