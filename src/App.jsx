import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter/PostFilter';
import { Button } from './components/UI/Button/Button';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { usePosts } from './hooks/usePosts';

export const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: '3 JS - is a programming language!'},
    {id: 2, title: 'Python', body: '2 Python - is a programming language!'},
    {id: 3, title: 'C#', body: '1 C# - is a programming language!'}
  ]);

  const [isModalActive, setIsModalActive] = useState(false);
  //  выбранный алгоритм сортировки и поисковая строка
  const [filter, setFilter] = useState({sort: '', query: ''});
  //используем свой хук
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  //  callback, для получения нового поста в  массиве
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setIsModalActive(false);
  };
  //  получаем пост из дочернего элемента
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }


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
