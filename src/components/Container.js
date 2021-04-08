import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";

const StyledContainer = styled.div`
  display: grid;
  max-width: 1000px;
  margin: auto;
  padding: 0px 20px;
  padding-bottom: 20px;
  @media (max-width: 800px) {
    padding: 10px;
  }
`;

function Container({ children }) {
  return (
    <StyledContainer>
      <TopBar />
      <div>{children}</div>
    </StyledContainer>
  );
}

export default Container;
