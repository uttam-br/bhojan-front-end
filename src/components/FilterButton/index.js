import React from "react";

import { ArrowDropDown } from "@material-ui/icons";

import "./styles.css";

function FilterButton({ title }) {
  return (
    <div className="filter-button">
      {title} <ArrowDropDown fontSize="large" />
    </div>
  );
}

export default FilterButton;
