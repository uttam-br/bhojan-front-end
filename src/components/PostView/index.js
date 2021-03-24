import React from "react";

import "./styles.css";

// custom components
import AuthorInfo from "../AuthorInfo";
import Body from "../Body";
import StatusIndicator from "../StatusIndicator";

const post = {
  title: "Veg Pizza",
  available: true,
  veg: false,
  description: "Approx 2kg, enough for 2 people",
  distance: "8.1km away",
  image: "https://via.placeholder.com/300",
  author: {
    name: "Uttam Rabari",
    phone: "9313958351",
    stars: 4,
    image: "https://via.placeholder.com/50",
  },
};

function PostView() {
  return (
    <Body id="post-view">
      <div className="post">
        <div className="post-image-container">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="post-details">
          <div className="post-details-heading">
            <h1>{post.title}</h1>
            <p>{post.distance}</p>
          </div>

          <div className="post-details-description">
            <p>{post.description}</p>
          </div>

          <div className="post-details-request-button-container">
            <div>
              <StatusIndicator
                text={post.veg === true ? "Veg" : "Non-Veg"}
                indicatorStatus={post.veg}
              />
              <StatusIndicator
                text={post.available === true ? "Available" : "Not Available"}
                indicatorStatus={post.available}
              />
              <div> </div>
            </div>
            <div>
              <button className="request-button">Request</button>
            </div>
          </div>

          <AuthorInfo author={post.author} />
        </div>
      </div>
    </Body>
  );
}

export default PostView;
