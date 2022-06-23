import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { v4 } from 'uuid';

const PostForm = ({create}) => {
    
  const [post, setPost] = useState({title: '', body:'',});

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
        ...post, id: v4()
    }
    create(newPost);
    setPost({title: '', body:'',});
  }
    return (
        <form style={{margin: '0 auto'}}>
        <Input 
          type="text" 
          placeholder="Title"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <Input 
          type="text" 
          placeholder="Posts Body"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <Button onClick={addNewPost}>Create post</Button>
      </form>
    );
};

export default PostForm;