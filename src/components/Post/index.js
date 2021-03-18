import React from "react";

import { StarBorder, Star } from "@material-ui/icons";

import "./styles.css";

function Post({ post, author }) {
  return (
    <div className="post">
      <div className="column-1">
        <div className="post-details">
          <h2>{post.title}</h2>
          <br />
          <div className="post-description">{post.description}</div>
        </div>
        <div className="author-container">
          <div className="author-image-container">
            <img src={author.image} alt={author.title} />
          </div>
          <div className="author-info-container">
            <h3>{author.name}</h3>
            <p>
              <Star fontSize="small" />
              <Star fontSize="small" />
              <Star fontSize="small" />
              <Star fontSize="small" />
              <StarBorder fontSize="small" />
            </p>
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
