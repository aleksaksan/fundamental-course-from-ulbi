import React, { useState } from 'react';
import './App.css'
import PostList from './components/PostList/PostList';

export const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'JS - is a programming language!'},
    {id: 2, title: 'JavaScript', body: 'JS - is a programming language!'},
    {id: 3, title: 'JavaScript', body: 'JS - is a programming language!'}
  ]);

  return (
    <>
      <PostList posts={posts} title="Posts List:" />
    </>
  );
}

