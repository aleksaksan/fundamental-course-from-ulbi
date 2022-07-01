import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { PostContentPage } from '../../pages/PostContentPage/PostContentPage';
import { PostPage } from '../../pages/PostsPage/PostPage';

export const PrivateRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/posts/:id" element={<PostContentPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
