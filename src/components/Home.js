import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from "./Container";

const BulletPoint = styled.div`
  margin: 20px 0px;
`;
const BulletPointsContainer = styled.div`
  max-width: 500px;
  margin: auto;
`;
const Description = styled.p`
  color: #303030;
`;
const ExportButton = styled.button`
  background-color: #0372c1;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 16px;
  margin: 35px auto;
  padding: 10px 20px;
  text-align: center;
  transition: background-color 300ms linear;
  &:hover {
    background-color: white;
    color: #0372c1;
    border: 1px solid #0372c1;
  }
`;
const Heading = styled.h1`
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  margin: 10px;
`;

function Home() {
  return (
    <Container>
      <BulletPointsContainer>
        <BulletPoint>
          <Heading>Food wastage in India</Heading>
          <Description>
            Did you know that about 40 % of the food produced in India is
            wasted? Despite adequate food production, the UN has reported that
            about 190 million Indians remain undernourished. It is further
            estimated that the value of food wastage in India is around ₹92,000
            crores per annum.
          </Description>
        </BulletPoint>

        <BulletPoint>
          <Heading>Possible Solutions</Heading>
          <Description>
            Here are few possible solution to tacke this problem. <br />
            1. Plan Ahead. <br />
            2. Don’t throw leftover <br />
            3. Prevent and Reduce Food Waste in Your Own Life. <br />
            4. Volunteer with Local Food Rescue Organizations. <br />
            5. Support Businesses with Good Food Waste Practices, and there are
            many more ways.
          </Description>
        </BulletPoint>

        <BulletPoint>
          <Heading>How are we solving?</Heading>
          <Description>
            We can use the accessability of internet to solve this problems
            effectively. People can come forward and share their leftover food
            on our platform which can then be delivered to people in need,
            solving two problems at once. Explore our platform now.
          </Description>
        </BulletPoint>
      </BulletPointsContainer>
      <Link to="/dashboard">
        <ExportButton>Explore</ExportButton>
      </Link>
    </Container>
  );
}

export default Home;
