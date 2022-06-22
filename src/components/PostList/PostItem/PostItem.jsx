import React from "react";
import { Button } from "../../UI/Button/Button";
import "./PostItem.scss";

// export type post = {
//   id: number,
//   title: string,
//   body: string,
// };

export const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post-content">
        <strong>{`${props.number}. ${props.post.title}`}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post-btn">
        <Button 
          onClick={() => props.remove(props.post)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
