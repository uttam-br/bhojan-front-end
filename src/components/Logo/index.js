import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Logo() {
  return (
    <Link to="/">
      <h1 className="main-logo">BHOJAN</h1>
    </Link>
  );
}

export default Logo;
