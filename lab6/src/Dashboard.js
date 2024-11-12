import React, { useState } from "react";
import Posts from "./Posts";

const Dashboard = () => {
  const [posts, setPosts] = useState([
    {
      id: 111,
      title: "Happiness",
      author: "John",
      gpa: 3.4,
      content: "This is the content in the post...",
    },
    {
      id: 112,
      title: "MIU",
      author: "Dean",
      gpa: 3.4,
      content: "This is the content in the post...",
    },
    {
      id: 113,
      title: "Enjoy Life",
      author: "Jasmine",
      gpa: 3.4,
      content: "This is the content in the post...",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");

  // Function to update the first post's title
  const updateTitle = () => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      updatedPosts[0].title = newTitle;
      return updatedPosts;
    });
  };

  return (
    <div>
      <Posts posts={posts} />
      <input
        type="text"
        placeholder="Update title for first post"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={updateTitle}>Update Title</button>
    </div>
  );
};

export default Dashboard;
