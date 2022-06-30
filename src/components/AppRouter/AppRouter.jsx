import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { PostPage } from '../../pages/PostsPage/PostPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PostPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
