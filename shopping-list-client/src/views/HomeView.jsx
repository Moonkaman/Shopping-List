import React, { useState, useEffect } from "react";
import axios from "axios";

import HouseList from "../components/HomeView/HouseList";

const HomeView = props => {
  if (!localStorage.getItem("jwt")) props.history.push("/login");

  const [houses, setHouses] = useState([]);

  useEffect(_ => {
    axios
      .get(`${props.baseURL}/houses`)
      .then(res => setHouses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <HouseList houses={houses} />
    </div>
  );
};

export default HomeView;
