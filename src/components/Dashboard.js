import React from "react";
import "./styles.css";

import Container from "./Container";
import FilterBar from "./FilterBar";
import PostsContainer from "./PostsContainer";

function Dashboard() {
  return (
    <Container>
      <FilterBar />
      <PostsContainer />
    </Container>
  );
}

export default Dashboard;
