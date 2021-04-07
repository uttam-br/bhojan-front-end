import React from "react";
import styled from "styled-components";
import Stars from "./Stars";

const AuthorContainer = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  margin-right: 10px;
`;
const InfoContainer = styled.div`
  align-items: center;
  display: grid;
`;
const UserImage = styled.img`
  border-radius: 50%;
`;

function AuthorInfo({ author }) {
  return (
    <AuthorContainer>
      <ImageContainer>
        <UserImage src={author.image} alt={author.title} />
      </ImageContainer>
      <InfoContainer>
        <h3>{author.name}</h3>
        <p>
          <Stars stars={author.stars} maxStars={5} />
        </p>
      </InfoContainer>
    </AuthorContainer>
  );
}

export default AuthorInfo;
