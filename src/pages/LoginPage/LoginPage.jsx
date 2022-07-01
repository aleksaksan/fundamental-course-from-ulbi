import React, { useContext } from 'react';
import './LoginPage.scss';
import { Button } from '../../components/UI/Button/Button';
import { Input } from '../../components/UI/Input/Input';
import { AuthContext } from '../../context/index';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);
  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
    navigate('/');
  }

  return (
    <div className='login-container'>
      <form onSubmit={login}>
        <Input type={'text'} placeholder="Login" />
        <Input type={'password'} placeholder="Password" />
        <Button>Sign in</Button>
      </form>
    </div>
  );
};
