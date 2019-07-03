import React, { useState, useEffect } from "react";
import axios from "axios";

import HouseList from "../components/HomeView/HouseList";

const HomeView = props => {
  if (!localStorage.getItem("jwt")) props.history.push("/login");

  const [houses, setHouses] = useState([]);

  useEffect(_ => {
    axios
      .get(`${props.baseURL}/users/me`)
      .then(res => {
        if (res.data.houses.length === 0) {
          props.history.push("/pickhouse");
        } else {
          setHouses(res.data.houses);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={e => {
          localStorage.removeItem("jwt");
          props.history.push("/login");
        }}
      >
        logout
      </button>
      <HouseList houses={houses} />
    </div>
  );
};

export default HomeView;
