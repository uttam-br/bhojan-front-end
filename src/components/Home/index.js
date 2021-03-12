import React from "react";
import "./styles.css";
import Logo from "../Logo";

function Home(props) {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <div className="buttons">
          <button>REGISTER</button>
          <button>LOGIN</button>
        </div>
      </div>
      <hr className="horizontal-separator" />
      <div className="body">
        <div className="bullet-points">
          <div className="bullet-point">
            <h2>Food wastage in India</h2>
            <p>
              Did you know that about 40 % of the food produced in India is
              wasted? Despite adequate food production, the UN has reported that
              about 190 million Indians remain undernourished. It is further
              estimated that the value of food wastage in India is around
              ₹92,000 crores per annum.
            </p>
          </div>

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

          <div className="bullet-point">
            <h2>How are we solving?</h2>
            <p>
              We can use the accessability of internet to solve this problems
              effectively. People can come forward and share their leftover food
              on our platform which can then be delivered to people in need,
              solving two problems at once. Explore our platform now.
            </p>
          </div>
        </div>
        <div className="explore-button-container">
          <button>EXPLORE</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
