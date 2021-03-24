import React from "react";
import "./styles.css";

import TopBar from "../TopBar";

function Body({ children }) {
  return (
    <div className="container">
      <TopBar />
      <hr className="horizontal-separator" />
      <div className="body">{children}</div>
    </div>
  );
}

export default Body;
