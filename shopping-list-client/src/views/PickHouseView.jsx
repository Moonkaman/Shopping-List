import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import HouseList from "../components/HomeView/HouseList";
import CreateHouseForm from "../components/HomeView/CreateHouseForm";

const useStyles = makeStyles({
  createHouse: {
    marginTop: "100px"
  }
});

const PickHouseView = props => {
  const classes = useStyles();

  const [houses, setHouses] = useState([]);

  useEffect(_ => {
    axios
      .get(`${props.baseURL}/houses`)
      .then(res => setHouses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <HouseList houses={houses} />
      <CreateHouseForm baseURL={props.baseURL} />
    </div>
  );
};

export default PickHouseView;
