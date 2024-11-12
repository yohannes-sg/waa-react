import React from "react";

const PostDetails = ({ post }) => (
  <div style={{ border: "1px solid #000", padding: "15px", margin: "10px" }}>
    <h3>Post Details</h3>
    <p>
      <strong>Title:</strong> {post.title}
    </p>
    <p>
      <strong>Author:</strong> {post.author}
    </p>
    <p>
      <strong>GPA:</strong> {post.gpa}
    </p>
    <p>
      <strong>Content:</strong> {post.content}
    </p>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

export default PostDetails;
