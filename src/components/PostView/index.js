import React from "react";

import "./styles.css";

import Body from "../Body";

const post = {
  title: "Veg Pizza",
  available: "false",
  veg: "false",
  description: "Approx 2kg, enough for 2 people",
  distance: "8.1km away",
  image: "https://via.placeholder.com/250",
  author: {
    name: "Uttam Rabari",
    phone: "9313958351",
    stars: "4",
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
      </div>
    </Body>
  );
}

export default PostView;
