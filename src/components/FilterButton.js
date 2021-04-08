import React from "react";
import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";

const StyledFilterButton = styled.div`
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  margin-right: 10px;
  padding: 10px;
  align-items: center;
  width: fit-content;
`;

function FilterButton({ title }) {
  return (
    <StyledFilterButton>
      {title} <ArrowDropDown fontSize="large" />
    </StyledFilterButton>
  );
}

export default FilterButton;
