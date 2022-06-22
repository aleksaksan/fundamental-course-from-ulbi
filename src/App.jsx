import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import PostList from './components/PostList/PostList';
import { Button } from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';

export const App = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'JS - is a programming language!'},
    {id: 2, title: 'JavaScript', body: 'JS - is a programming language!'},
    {id: 3, title: 'JavaScript', body: 'JS - is a programming language!'}
  ]);

  const [title, setTitle] = useState('');
  const [body, setPostsBody] = useState('');
  // const bodyInputRef = useRef(); //получаем доступ к DOM элементу и у него забираем value
  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: uuidv4(), //можно заменить на Date.now()
      title,
      body,
    }
    // console.log(newPost);
    // console.log(bodyInputRef.current.value)

    setPosts([...posts, newPost]);
    setTitle('');
    setPostsBody('');
  }

  return (
    <>
      <form>
        {/* управляемый компонент(инпут) */}
        <Input 
          type="text" 
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Input 
          type="text" 
          placeholder="Posts Body"
          value={body}
          onChange={e => setPostsBody(e.target.value)}
        />
        {/* неуправляемый/неконтролируемый компонент(инпут)
        <Input
          type="text"
          placeholder="Post"
          ref={bodyInputRef}
        /> */}
        <Button onClick={addNewPost}>Create post</Button>
      </form>
      <PostList posts={posts} title="Posts List:" />
    </>
  );
}

