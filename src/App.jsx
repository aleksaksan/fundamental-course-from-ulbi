import React, { useState } from 'react';
import './App.css'
import PostList from './components/PostList/PostList';
import PostForm from './components/UI/PostForm/PostForm';

export const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'JS - is a programming language!'},
    {id: 2, title: 'JavaScript', body: 'JS - is a programming language!'},
    {id: 3, title: 'JavaScript', body: 'JS - is a programming language!'}
  ]);
  //  callback, для получения нового поста в  массиве
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  //  получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  return (
    <>
      <PostForm create={createPost} />
      {posts.length > 0
        ? <PostList remove={removePost} posts={posts} title="Posts List:" />
        : <h1 style={{textAlign: 'center'}}>
          Постов нет!
        </h1>
      }
    </>
  );
}

