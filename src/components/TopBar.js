import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Logo from "./Logo";

const Button = styled.button`
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 10rem;
  ${(props) =>
    props.primary &&
    css`
      background-color: #0372c1;
      color: white;
    `}
  @media (max-width: 800px) {
    min-width: auto;
    height: 40px;
    padding: 0px 10px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
`;
const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;
const UserImage = styled.img`
  border-radius: 50%;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;

const loggedIn = true;

function TopBar() {
  return (
    <Header>
      <Column>
        <Logo />
      </Column>
      <Column>
        {loggedIn ? (
          <>
            <Button primary>Logout</Button>
            <User>
              <UserImage
                src="https://via.placeholder.com/60"
                alt="user profile"
              />
            </User>
          </>
        ) : (
          <>
            <ButtonsContainer>
              <Link to="/register">
                <Button primary>Register</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </ButtonsContainer>
          </>
        )}
      </Column>
    </Header>
  );
}

export default TopBar;
