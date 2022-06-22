import React, { useState } from 'react';
import './App.css'
import PostList from './components/PostList/PostList';
import { Input } from './components/UI/Input/Input';
import PostForm from './components/UI/PostForm/PostForm';
import Select from './components/UI/Select/Select';

export const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: '3 JS - is a programming language!'},
    {id: 2, title: 'Python', body: '2 Python - is a programming language!'},
    {id: 3, title: 'C#', body: '1 C# - is a programming language!'}
  ]);

  //  callback, для получения нового поста в  массиве
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  //  получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  //  сортировка
  const [selectedSort, setSelectedSort] = useState('');
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }
  const [searchQuery, setSearchQuery] = useState('');

  const getSortedPosts = () => {
    console.log('getSortedPosts called')
    if (selectedSort)
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
    return posts; 
  }

  const sortedPosts = getSortedPosts();

  return (
    <>
      <PostForm create={createPost} />
      <hr />
      <div>
        <Input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Searching..."
          />
        <Select
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By content'}
          ]}
          />
      </div>
      {posts.length > 0
        ? <PostList remove={removePost} posts={sortedPosts} title="Posts List:" />
        : <h1 style={{textAlign: 'center'}}>
          Постов нет!
        </h1>
      }
    </>
  );
}

