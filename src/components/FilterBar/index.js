import React from "react";

import FilterButton from "../FilterButton";

import "./styles.css";

function FilterBar(props) {
  return (
    <div className="filter-bar">
      <FilterButton title="sort by" />
      <FilterButton title="within" />
    </div>
  );
}

export default FilterBar;
