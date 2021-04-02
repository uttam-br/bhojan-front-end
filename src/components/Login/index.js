import React from "react";
import "./styles.css";

import Body from "../Body";

function Home(props) {
  return (
    <Body>
      <div className="form-container">
        <h1>Login</h1>
        <p className="small-text">All fields are required</p>
        <form>
          <div className="input-container">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" required />
          </div>
          <p className="small-text">
            <a href="#forgotPassword">Forgot password?</a>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </Body>
  );
}

export default Home;
