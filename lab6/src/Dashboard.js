import React, { useEffect, useState } from "react";
import PostDetails from "./PostDetails";

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/users/6/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleDeletePost = (postId) => {
    fetch(`http://localhost:8080/api/v1/users/6/posts/${postId}`, {
      method: "DELETE",
    })
      .then(() =>
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
      )
      .catch((error) => console.error("Error deleting post:", error));
    setSelectedPost(null);
  };

  const handleAddPost = (newPost) => {
    fetch("http://localhost:8080/api/v1/users/6/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => setPosts((prevPosts) => [...prevPosts, data]))
      .catch((error) => console.error("Error adding post:", error));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", overflowX: "auto", gap: "10px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => handleSelectPost(post)}
            style={{
              cursor: "pointer",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.author}</p>
          </div>
        ))}
      </div>

      {selectedPost && (
        <PostDetails
          post={selectedPost}
          onDelete={() => handleDeletePost(selectedPost.id)}
          onAdd={handleAddPost}
        />
      )}
    </div>
  );
}

export default Dashboard;
