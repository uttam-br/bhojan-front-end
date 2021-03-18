import React from "react";

import Post from "../Post";

import "./styles.css";

const post = {
  title: "Burger King",
  available: "false",
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

function PostsContainer(props) {
  return (
    <div className="post-container">
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
    </div>
  );
}

export default PostsContainer;
