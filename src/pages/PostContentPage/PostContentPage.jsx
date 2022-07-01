import React, { useEffect, useState } from 'react';
import './PostContentPage.scss';
import { useParams } from 'react-router-dom';
import { PostService } from '../../API/PostService/PostService';
import { Loader } from '../../components/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';

export const PostContentPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching( async (id) => {
    const res = await PostService.getPostById(params.id);
    setPost(res.data);
  });
  const [fetchCommentById, isCommentLoading, errorComment] = useFetching( async (id) => {
    const res = await PostService.getCommentByPostId(params.id);
    setComments(res.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentById(params.id);
  }, []);
  
  return (
    <div className='post-content-container'>
      <h1>Post #{params.id}</h1>
      {isLoading || isCommentLoading ?
        <Loader /> :
        <>
          <h4>{post.id} {post.title}</h4>
          <div className='comments-container'>
            {comments.map((comm) => (
            <div key={comm.id} style={{marginTop: 20}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
            ))}
          </div>
        </>
      }
    </div>
  );
};
