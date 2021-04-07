import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthorInfo from "./AuthorInfo";

const PostContainer = styled.div`
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const Image = styled.img`
  align-items: center;
  display: grid;
`;

function Post({ post, author }) {
  return (
    <Link to="/post">
      <PostContainer>
        <Column>
          <div className="post-details">
            <h2>{post.title}</h2>
            <br />
            <div className="post-description">{post.description}</div>
          </div>
          <AuthorInfo author={post.author} />
        </Column>
        <Column>
          <Image src={post.image} alt={post.title} />
        </Column>
      </PostContainer>
    </Link>
  );
}

export default Post;
