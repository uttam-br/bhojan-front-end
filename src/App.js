import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import PostView from "./components/PostView";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/post" component={PostView} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
