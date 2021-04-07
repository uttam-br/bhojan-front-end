import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainLogo = styled.h1`
  color: #0372c1;
  font-family: "Codystar", sans-serif;
  font-size: 60px;

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
