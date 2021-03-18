import React from "react";
import "./styles.css";
import FilterBar from "../FilterBar";
import PostsContainer from "../PostsContainer";
import TopBar from "../TopBar";

function Dashboard() {
  return (
    <div className="container">
      <TopBar />
      <hr className="horizontal-separator" />
      <div className="body">
        <FilterBar />
        <PostsContainer />
      </div>
    </div>
  );
}

export default Dashboard;
