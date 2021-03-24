import React from "react";

import "./styles.css";

// custom components
import AuthorInfo from "../AuthorInfo";

function Post({ post, author }) {
  return (
    <div className="post">
      <div className="column-1">
        <div className="post-details">
          <h2>{post.title}</h2>
          <br />
          <div className="post-description">{post.description}</div>
        </div>
        <AuthorInfo author={post.author} />
      </div>
      <div className="column-2">
        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>
      </div>
    </div>
  );
}

export default Post;
