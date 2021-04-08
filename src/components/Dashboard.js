import React from "react";

import Container from "./Container";
import FilterBar from "./FilterBar";
import Posts from "./Posts";

function Dashboard() {
  return (
    <Container>
      <FilterBar />
      <Posts />
    </Container>
  );
}

export default Dashboard;
