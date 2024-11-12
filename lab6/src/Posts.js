import React, { useState } from "react";
import Post from "./Post";
import PostDetails from "./PostDetails";
import "./Posts.css";

const Posts = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>
      {selectedPost && <PostDetails post={selectedPost} />}
    </div>
  );
};

export default Posts;
