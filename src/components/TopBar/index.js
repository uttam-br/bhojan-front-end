import React from "react";

import Logo from "../Logo";

import "./styles.css";

function TopBar() {
  return (
    <div className="header">
      <Logo />
      <div>
        <div className="buttons">
          <button>Logout</button>
        </div>
        <div className="user-circle">
          <img src="https://via.placeholder.com/60" alt="user profile" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
