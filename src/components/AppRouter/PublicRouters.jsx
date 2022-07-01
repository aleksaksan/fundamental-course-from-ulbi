import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { LoginPage } from '../../pages/LoginPage/LoginPage';

export const PublicRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/posts" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
