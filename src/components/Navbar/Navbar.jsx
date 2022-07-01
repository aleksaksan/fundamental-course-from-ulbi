import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='main-panel'>
      <div className='nav-container'>
        <Link to='/posts'>Posts</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
};
