// PostDetails.js
import React, { useState, useEffect } from "react";
import Comment from "./Comment";

function PostDetails({ post, onDelete, onAdd }) {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (post && post.id) {
      fetch(`http://localhost:8080/api/v1/users/6/posts/${post.id}/comments`)
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.error("Error fetching comments:", error));
    }
  }, [post]);

  const handleAddPost = () => {
    if (newPost.title && newPost.author && newPost.content) {
      onAdd(newPost);
      setNewPost({ title: "", author: "", content: "" });
    }
  };

  return (
    <div
      style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px" }}
    >
      <h2>{post.title}</h2>
      <p>
        <strong>post Id:</strong> {post.id}
      </p>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>
        <strong>Content:</strong> {post.content}
      </p>
      <button
        onClick={onDelete}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Delete Post
      </button>

      <h3>Add New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newPost.author}
        onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      ></textarea>
      <button
        onClick={handleAddPost}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Add Post
      </button>

      <h3>Comments</h3>

      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
}

export default PostDetails;
