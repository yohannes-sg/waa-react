import React from "react";
// import "./Comment.css";

const Comment = ({ comment }) => {
  if (!comment) {
    return <div>Loading...</div>; // Or handle it in a way appropriate for your app
  }

  return (
    <div>
      <p>Comment ID: {comment.id}</p>
      <p>Comment : {comment.name}</p>
    </div>
  );
};

export default Comment;
