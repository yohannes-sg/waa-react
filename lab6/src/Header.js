import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      style={{ padding: "10px", background: "#f0f0f0", marginBottom: "20px" }}
    >
      <Link to="/" style={{ marginRight: "10px" }}>
        Posts
      </Link>
      <Link to="/new-post" style={{ marginRight: "10px" }}>
        New Post
      </Link>
      <Link to="/login" style={{ marginRight: "10px" }}>
        Sign In
      </Link>
    </nav>
  );
}

export default Header;
