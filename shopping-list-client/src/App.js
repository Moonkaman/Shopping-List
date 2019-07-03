import React from "react";
import { Route, withRouter } from "react-router-dom";
import axios from 'axios';

import "./App.css";

import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import PickHouseView from './views/PickHouseView';

const App = props => {

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    props.history.push('/login');
    localStorage.removeItem('jwt');
    return Promise.reject(error);
  });

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
      <Route
        exact
        path="/pickhouse"
        render={props => <PickHouseView {...props} baseURL={baseURL} />}
      />
    </div>
  );
};

export default withRouter(App);
