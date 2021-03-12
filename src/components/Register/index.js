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
      <div className="body"></div>
    </div>
  );
}

export default Home;
