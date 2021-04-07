import React from "react";
import styled from "styled-components";
import Container from "./Container";

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
const SmallText = styled.p`
  font-size: 12px;
  color: #434343;
`;

function Register() {
  return (
    <Container>
      <FormContainer>
        <FormHeading>Registration</FormHeading>
        <SmallText>All fields are required</SmallText>
        <form>
          <InputContainer>
            <Input type="text" placeholder="First Name" required />
          </InputContainer>
          <InputContainer>
            <Input type="text" placeholder="Last Name" required />
          </InputContainer>
          <InputContainer>
            <Input type="email" placeholder="Email Address" required />
          </InputContainer>
          <InputContainer>
            <Input
              minLength="10"
              maxlength="10"
              pattern="[0-9]*"
              placeholder="Phone Number"
              type="tel"
              required
            />
          </InputContainer>
          <InputContainer>
            <Input type="password" placeholder="Password" required />
          </InputContainer>
          <SmallText>
            By joining I agree to the following:Terms and conditions | Privacy
            policy | End user licence agreementI also consent to receive
            marketing emails about its products and services which I can opt out
            of at the bottom of each email and/or via my notifications settings.
          </SmallText>
          <Button type="submit">Register</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default Register;
