import React from 'react';
import './styles/App.css';
import { Navbar } from './components/Navbar/Navbar';
import { AppRouter } from './components/AppRouter/AppRouter';

export const App = () => {
  
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}
