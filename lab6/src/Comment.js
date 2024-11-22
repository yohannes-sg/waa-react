import React, { memo } from "react";

const Comment = memo(({ id, name }) => {
  if (!id || !name) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <p>Comment ID: {id}</p>
      <p>Comment: {name}</p>
    </div>
  );
});

export default Comment;
