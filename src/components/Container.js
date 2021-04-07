import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";

const StyledContainer = styled.div`
  display: grid;
  max-width: 1100px;
  margin: auto;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

const HorizontalSeparator = styled.hr`
  width: 100%;
  background-color: #e0e0e0;
`;

function Container({ children }) {
  return (
    <StyledContainer>
      <TopBar />
      <HorizontalSeparator />
      <div>{children}</div>
    </StyledContainer>
  );
}

export default Container;
