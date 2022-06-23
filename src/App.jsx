import React, { useMemo, useState } from 'react';
import './App.css'
import { CounterWithUseReducer } from './components/Counter/CounterWithUseReducer';
import PostList from './components/PostList/PostList';
import { Button } from './components/UI/Button/Button';
import { Input } from './components/UI/Input/Input';
import { ModalWindow } from './components/UI/ModalWindow/ModalWindow';
import PostFilter from './components/UI/PostFilter/PostFilter';
import PostForm from './components/UI/PostForm/PostForm';
import Select from './components/UI/Select/Select';

export const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: '3 JS - is a programming language!'},
    {id: 2, title: 'Python', body: '2 Python - is a programming language!'},
    {id: 3, title: 'C#', body: '1 C# - is a programming language!'}
  ]);

  const [isModalActive, setIsModalActive] = useState(false);

  //  callback, для получения нового поста в  массиве
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModalActive(false);
  };
  //  получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  //  выбранный алгоритм сортировки и поисковая строка
  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosts called')
    if (filter.sort)
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
    return posts; 
  }, [filter.sort, posts]);

 // поиск по названию поста
  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter(item => item.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <Button style={{marginTop: 30}} onClick={() => setIsModalActive(true)} >
        create post
      </Button>
      <ModalWindow visible={isModalActive} setVisible={setIsModalActive} >
        <PostForm create={createPost} />
      </ModalWindow> 
      <hr style={{margin: 20}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts List:" />
    </div>
  );
}

