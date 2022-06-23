import React from 'react';
import { PostItem } from './PostItem/PostItem';
import './PostList.scss';

const PostList = ({posts, title, remove}) => {
  
if (!posts.length)
  return (
    <h1 style={{textAlign: 'center'}}>
      Постов нет!
    </h1>
  );

  return (
    <div className='post-container'>
        <h1 style={{textAlign: "center"}}>
          {title}
        </h1>
      {posts.map((postItem, index) =>
        <PostItem
          remove={remove}
          number={index + 1}
          post={postItem}
          key={postItem.id}
        />
      )}
    </div>
  );
};

export default PostList;