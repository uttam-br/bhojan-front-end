import React from "react";

import "./styles.css";

function Post({ post, author }) {
  return (
    <div className="post">
      <div className="column-1">
        <div className="post-details">
          <div></div>
          <h1>{post.title}</h1>
          <div className="post-description">{post.description}</div>
        </div>
        <div className="author-container">
          <div className="author-image-container">
            <img src={author.image} alt={author.title} />
          </div>
          <div className="author-info-container">
            <h2>{author.name}</h2>
            <p>{author.phone}</p>
          </div>
        </div>
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
