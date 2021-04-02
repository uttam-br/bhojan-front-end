import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";

import "./styles.css";

const loggedIn = false;

function TopBar() {
  return (
    <div className="header">
      <Logo />
      <div>
        <div className="buttons-container">
          {loggedIn ? (
            <>
              <button className="btn-primary">Logout</button>
              <div className="user-circle">
                <img src="https://via.placeholder.com/60" alt="user profile" />
              </div>
            </>
          ) : (
            <>
              <div className="buttons">
                <Link to="/register">
                  <button className="btn-primary">REGISTER</button>
                </Link>
                <Link to="/login">
                  <button className="btn-primary">LOGIN</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
