import React, { useState } from "react";
import axios from "axios";

import RegisterForm from "../components/RegisterView/RegisterForm";

const RegisterView = props => {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    password: ""
  });

  const register = e => {
    e.preventDefault();
    axios
      .post(`${props.baseURL}/auth/register`, registerInfo)
      .then(res => props.history.push("/login"))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <RegisterForm
        register={register}
        registerInfo={registerInfo}
        setRegisterInfo={setRegisterInfo}
      />
    </div>
  );
};

export default RegisterView;
