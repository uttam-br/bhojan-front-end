import React from "react";
import "./styles.css";
import Logo from "../Logo";
import FilterBar from "../FilterBar";
import PostsContainer from "../PostsContainer";

function Dashboard(props) {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <div className="buttons">
          <button>Logout</button>
          <div className="user-circle">
            <img src="https://via.placeholder.com/70" alt="user profile" />
          </div>
        </div>
      </div>
      <hr className="horizontal-separator" />
      <div className="body">
        <FilterBar />
        <PostsContainer />
      </div>
    </div>
  );
}

export default Dashboard;
