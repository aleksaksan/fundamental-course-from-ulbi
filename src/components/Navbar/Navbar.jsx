import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='main-panel'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  );
};
