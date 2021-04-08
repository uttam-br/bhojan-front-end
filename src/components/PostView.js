import React from "react";
import styled, { css } from "styled-components";

import AuthorInfo from "./AuthorInfo";
import Container from "./Container";
import StatusIndicator from "./StatusIndicator";

const post = {
  title: "Veg Pizza",
  available: true,
  veg: true,
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

const Post = styled.div`
  background-color: white;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const PostImage = styled.img`
  border-radius: 5px;
`;
const PostDetails = styled.div`
  width: 300px;
  padding: 10px 20px;
`;
const PostHeading = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const PostDescription = styled.div`
  margin: 20px 0px;
`;
const IndicatorAndRequestButtonSection = styled.div`
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
  align-items: center;
`;
const RequestButton = styled.button`
  padding: 10px 40px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  color: #0372c1;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 300ms linear;
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
  &:hover {
    background-color: #0372c1;
    color: white;
  }
`;

function PostView() {
  return (
    <Container>
      <Post>
        <ImageContainer>
          <PostImage src={post.image} alt={post.title} />
        </ImageContainer>

        <PostDetails>
          <PostHeading>
            <h1>{post.title}</h1>
            <p>{post.distance}</p>
          </PostHeading>

          <PostDescription>
            <p>{post.description}</p>
          </PostDescription>

          <IndicatorAndRequestButtonSection>
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
              <RequestButton disabled={!post.available}>Request</RequestButton>
            </div>
          </IndicatorAndRequestButtonSection>
          <br />
          <AuthorInfo author={post.author} />
        </PostDetails>
      </Post>
    </Container>
  );
}

export default PostView;
