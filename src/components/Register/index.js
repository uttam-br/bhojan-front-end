import React from "react";
import "./styles.css";
import Body from "../Body";

function Home(props) {
  return (
    <Body>
      <div className="form-container">
        <h1>Registration</h1>
        <p className="small-text">All fields are required</p>
        <form>
          <div className="input-container">
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="input-container">
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="input-container">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-container">
            <input
              minLength="10"
              maxlength="10"
              pattern="[0-9]*"
              placeholder="Phone Number"
              type="tel"
              required
            />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" required />
          </div>
          <p className="small-text">
            By joining I agree to the following:Terms and conditions | Privacy
            policy | End user licence agreementI also consent to receive
            marketing emails about its products and services which I can opt out
            of at the bottom of each email and/or via my notifications settings.
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    </Body>
  );
}

export default Home;
