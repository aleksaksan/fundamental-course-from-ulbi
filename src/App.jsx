import React, { useState } from 'react';
import './App.css'
import { PostItem } from './components/PostItem/PostItem';

export const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'JS - is a programming language!'},
    {id: 2, title: 'JavaScript', body: 'JS - is a programming language!'},
    {id: 3, title: 'JavaScript', body: 'JS - is a programming language!'}
  ]);
  return (
    <>
      <h1>Posts List:</h1>
      {posts.map((postItem) =>
        <PostItem post={postItem} key={postItem.id}/>
      )}
    </>
  );
}

