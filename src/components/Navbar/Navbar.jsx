import React, { useContext } from 'react';
import './Navbar.scss'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import { Button } from '../UI/Button/Button';

export const Navbar = () => {
 const { isAuth, setIsAuth } = useContext(AuthContext);
 const navigate = useNavigate();
 const logout = event => {
  event.preventDefault();
  setIsAuth(false);
  localStorage.removeItem('auth');
  navigate('/');
 }

  return (
    <nav className='main-panel'>
      {isAuth &&
        <Button onClick={logout}>Logout</Button> 
      }
      <div className='nav-container'>
        <Link to='/posts'>Posts</Link>
        <Link to='/about'>About</Link>
      </div>
    </nav>
  );
};
