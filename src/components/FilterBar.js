import React from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";

const StyledFilterBar = styled.div`
  background-color: #f0f0f0;
  border-radius: 5px;
  display: flex;
  height: 60px;
  margin: 10px 0px;
  padding: 10px;
`;

function FilterBar(props) {
  return (
    <StyledFilterBar>
      <FilterButton title="sort by" />
      <FilterButton title="within" />
    </StyledFilterBar>
  );
}

export default FilterBar;
