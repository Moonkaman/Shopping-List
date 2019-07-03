import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  formCont: {
    maxWidth: "800px",
    margin: "50px auto 0 auto"
  },
  input: {
    width: "80%",
    marginRight: "10px"
  },
  btn: {
    width: "20%"
  },
  flexCont: {
    display: "flex"
  }
});

const CreateHouseForm = props => {
  const classes = useStyles();
  const [house_name, setHouseName] = useState("");

  const createHouse = e => {
    e.preventDefault();
    axios
      .post(`${props.baseURL}/houses`, { house_name })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <form className={classes.formCont} onSubmit={createHouse}>
      <Typography
        variant="h4"
        gutterBottom
        className={[classes.title, classes.createHouse]}
      >
        Or Create a House
      </Typography>
      <div className={classes.flexCont}>
        <TextField
          variant="outlined"
          label="Hosue Name"
          name="house_name"
          className={classes.input}
          value={house_name}
          onChange={e => setHouseName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          type="submit"
        >
          Create House
        </Button>
      </div>
    </form>
  );
};

export default CreateHouseForm;
