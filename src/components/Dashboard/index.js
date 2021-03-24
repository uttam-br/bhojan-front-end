import React from "react";
import "./styles.css";

import Body from "../Body";
import FilterBar from "../FilterBar";
import PostsContainer from "../PostsContainer";

function Dashboard() {
  return (
    <Body>
      <FilterBar />
      <PostsContainer />
    </Body>
  );
}

export default Dashboard;
