import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Logo from "./Logo";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  transition: background-color 200ms linear;
  width: 10rem;
  ${(props) =>
    props.primary &&
    css`
      background-color: #0372c1;
      color: white;
    `}
  &:hover {
    background-color: #0372c1;
    color: white;
  }
`;
const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
`;
const Column = styled.div`
  display: flex;
  margin: auto;
`;
const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  @media (max-width: 800px) {
    display: grid;
    grid-column-template: auto;
    justify-content: center;
  }
`;
const UserImage = styled.img`
  border-radius: 50%;
`;
const User = styled.div`
  align-items: center;
  display: flex;
`;

const loggedIn = false;

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
