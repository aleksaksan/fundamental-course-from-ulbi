import React from "react";
import { Button } from "../../UI/Button/Button";
import "./PostItem.scss";
import { useNavigate } from 'react-router-dom';

// export type post = {
//   id: number,
//   title: string,
//   body: string,
// };

export const PostItem = (props) => {
const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post-content-container">
        <strong>{`${props.post.id}. ${props.post.title}`}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post-btns-container">
        <Button 
          onClick={() => navigate(`/posts/${props.post.id}`)}
        >
          Open
        </Button>
        <Button 
          onClick={() => props.remove(props.post)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
