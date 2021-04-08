import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainLogo = styled.h1`
  color: #0372c1;
  font-family: "Train One", sans-serif;
  font-size: 42px;
  margin: auto;

  @media (max-width: 800px) {
    font-size: 42px;
  }
`;

function Logo() {
  return (
    <Link to="/">
      <MainLogo className="main-logo">BHOJAN</MainLogo>
    </Link>
  );
}

export default Logo;
