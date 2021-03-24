import React from "react";

import "./styles.css";

import Stars from "../Stars";

function AuthorInfo({ author }) {
  return (
    <div className="author-container">
      <div className="author-image-container">
        <img src={author.image} alt={author.title} />
      </div>
      <div className="author-info-container">
        <h3>{author.name}</h3>
        <p>
          <Stars stars={author.stars} maxStars={5} />
        </p>
      </div>
    </div>
  );
}

export default AuthorInfo;
