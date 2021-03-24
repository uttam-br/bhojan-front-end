import React from "react";

import Logo from "../Logo";

import "./styles.css";

const loggedIn = true;

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
                <button className="btn-primary">REGISTER</button>
                <button className="btn-primary">LOGIN</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
