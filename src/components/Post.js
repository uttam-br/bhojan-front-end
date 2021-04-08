import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthorInfo from "./AuthorInfo";

const AuthorInfoContainer = styled.div`
  padding: 15px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Image = styled.img`
  align-items: center;
  display: grid;
`;
const PostContainer = styled.div`
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;
const PostDetails = styled.div`
  padding: 15px;
  color: #343434;
`;

function Post({ post, author }) {
  return (
    <Link to="/post">
      <PostContainer>
        <Column>
          <PostDetails>
            <h2>{post.title}</h2>
            <br />
            <p>{post.description}</p>
          </PostDetails>
          <AuthorInfoContainer>
            <AuthorInfo author={post.author} />
          </AuthorInfoContainer>
        </Column>
        <Column>
          <Image src={post.image} alt={post.title} />
        </Column>
      </PostContainer>
    </Link>
  );
}

export default Post;
