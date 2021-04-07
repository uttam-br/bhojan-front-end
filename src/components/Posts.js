import React from "react";
import styled from "styled-components";
import Post from "./Post";

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px 20px;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: auto;
  }
`;

const post = {
  title: "Burger King",
  available: "false",
  description: "Approx 2kg, enough for 2 people",
  distance: "8.1km away",
  image: "https://via.placeholder.com/250",
  author: {
    name: "Uttam Rabari",
    phone: "9313958351",
    stars: 3,
    image: "https://via.placeholder.com/50",
  },
};

function Posts(props) {
  return (
    <PostsContainer>
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
      <Post post={post} author={post.author} />
    </PostsContainer>
  );
}

export default Posts;
