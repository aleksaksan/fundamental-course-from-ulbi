import React from 'react';
import { PostItem } from './PostItem/PostItem';
import './PostList.scss';

const PostList = ({posts, title}) => {
  
  return (
    <div className='post-container'>
        <h1 style={{textAlign: "center"}}>
          {title}
        </h1>
      {posts.map((postItem) =>
        <PostItem post={postItem} key={postItem.id}/>
      )}
    </div>
  );
};

export default PostList;