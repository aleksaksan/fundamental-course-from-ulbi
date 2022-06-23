import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup>
        {posts.map((postItem, index) =>
        <CSSTransition
          key={postItem.id}
          timeout={500}
          classNames="post">
            <PostItem
            remove={remove}
            number={index + 1}
            post={postItem}
        />
        </CSSTransition>
      )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;