import React from "react";
import "./styles.css";
import Logo from "../Logo";

function Home(props) {
  return (
    <div className="container">
      <div className="header">
        <Logo />
      </div>
      <hr className="horizontal-separator" />
      <div className="body">
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
              <a href="#">Forgot password?</a>
            </p>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
