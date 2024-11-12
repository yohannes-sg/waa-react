import React from "react";
import "./Post.css";

const Post = ({ post, onClick }) => (
  <div className="post" onClick={onClick}>
    <h2>{post.title}</h2>
    <p>Author: {post.author}</p>
    <p>GPA: {post.gpa}</p>
  </div>
);

export default Post;
