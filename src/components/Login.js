import React from "react";
import styled from "styled-components";
import Container from "./Container";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px 0px;
`;
const FormHeading = styled.h1`
  font-weight: 400;
`;
const InputContainer = styled.div`
  margin: 20px 0px;
`;
const Input = styled.input`
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  width: 300px;
`;
const Button = styled.button`
  background-color: #0372c1;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  margin: 20px auto;
  padding: 10px;
  width: 300px;
`;
const SmallText = styled.p`
  font-size: 12px;
  color: #434343;
  display: grid;
`;

function Login(props) {
  return (
    <Container>
      <FormContainer>
        <FormHeading>Login</FormHeading>
        <p className="small-text">All fields are required</p>
        <form>
          <InputContainer>
            <Input type="email" placeholder="Email Address" required />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Password" required />
          </InputContainer>
          <SmallText>
            <a href="#forgotPassword">Forgot password?</a>
          </SmallText>
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Login;
