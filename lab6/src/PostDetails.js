import React, { useState, useEffect, useRef, useContext } from "react";
import Comment from "./Comment";
import { PostContext } from "./PostContext";

function PostDetails({ onAdd }) {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  const [comments, setComments] = useState([]);

  // useRef for AddPost form
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  // Context to get the selected post ID globally
  const { selectedPostId } = useContext(PostContext);

  // Fetch comments when the selected post ID changes
  useEffect(() => {
    if (selectedPostId) {
      fetch(
        `http://localhost:8080/api/v1/users/6/posts/${selectedPostId}/comments`
      )
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.error("Error fetching comments:", error));
    }
  }, [selectedPostId]);

  const handleAddPost = () => {
    const newPostData = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      content: contentRef.current.value,
    };

    if (newPostData.title && newPostData.author && newPostData.content) {
      onAdd(newPostData);
      titleRef.current.value = "";
      authorRef.current.value = "";
      contentRef.current.value = "";
    }
  };

  return (
    <div
      style={{
        marginTop: "20px",
        border: "1px solid #ddd",
        padding: "10px",
      }}
    >
      {selectedPostId ? (
        <>
          <h2>Post Details</h2>
          <p>
            <strong>Post ID:</strong> {selectedPostId}
          </p>

          <h3>Add New Post</h3>
          <input ref={titleRef} placeholder="Title" />
          <input ref={authorRef} placeholder="Author" />
          <textarea ref={contentRef} placeholder="Content"></textarea>
          <button
            onClick={handleAddPost}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Add Post
          </button>

          <h3>Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <Comment key={comment.id} name={comment.name} />
            ))
          ) : (
            <p>No comments available.</p>
          )}
        </>
      ) : (
        <p>Please select a post to view details.</p>
      )}
    </div>
  );
}

export default PostDetails;
