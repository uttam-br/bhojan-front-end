import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from "./Container";

const BulletPoint = styled.div`
  margin: 20px 0px;
`;
const ExportButton = styled.button`
  background-color: #0372c1;
  border: none;
  color: white;
  display: block;
  font-size: 16px;
  margin: auto;
  padding: 20px 50px;
  cursor: pointer;
  text-align: center;
`;

function Home() {
  return (
    <Container>
      <div className="bullet-points">
        <BulletPoint>
          <h2>Food wastage in India</h2>
          <p>
            Did you know that about 40 % of the food produced in India is
            wasted? Despite adequate food production, the UN has reported that
            about 190 million Indians remain undernourished. It is further
            estimated that the value of food wastage in India is around ₹92,000
            crores per annum.
          </p>
        </BulletPoint>

        <BulletPoint>
          <div className="bullet-point">
            <h2>Possible Solutions</h2>
            <p>
              Here are few possible solution to tacke this problem. <br />
              1. Plan Ahead. <br />
              2. Don’t throw leftover <br />
              3. Prevent and Reduce Food Waste in Your Own Life. <br />
              4. Volunteer with Local Food Rescue Organizations. <br />
              5. Support Businesses with Good Food Waste Practices, and there
              are many more ways.
            </p>
          </div>
        </BulletPoint>

        <BulletPoint>
          <h2>How are we solving?</h2>
          <p>
            We can use the accessability of internet to solve this problems
            effectively. People can come forward and share their leftover food
            on our platform which can then be delivered to people in need,
            solving two problems at once. Explore our platform now.
          </p>
        </BulletPoint>
      </div>
      <div className="explore-button-container">
        <Link to="/dashboard">
          <ExportButton>Explore</ExportButton>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
