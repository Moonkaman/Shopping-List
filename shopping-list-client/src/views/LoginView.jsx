import React, { useState } from "react";
import axios from "axios";

import LoginForm from "../components/LoginView/LoginForm";

const LoginView = props => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  const login = e => {
    e.preventDefault();
    axios
      .post(`${props.baseURL}/auth/login`, loginInfo)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <LoginForm
        loginInfo={loginInfo}
        setLoginInfo={setLoginInfo}
        login={login}
      />
    </div>
  );
};

export default LoginView;
