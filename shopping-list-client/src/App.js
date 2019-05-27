import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

const App = props => {
  const baseURL = "http://localhost:8000/api";
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props => <HomeView {...props} baseURL={baseURL} />}
      />
      <Route
        exact
        path="/login"
        render={props => <LoginView {...props} baseURL={baseURL} />}
      />
      <Route
        exact
        path="/register"
        render={props => <RegisterView {...props} baseURL={baseURL} />}
      />
    </div>
  );
};

export default App;
