import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(theme => ({
  registerCont: {
    maxWidth: "250px",
    margin: "0 auto",
    padding: "20px"
  },
  registerInput: {
    width: "100%",
    marginTop: "20px"
  },
  button: {
    width: "100%",
    marginTop: "20px"
  },
  title: {
    textAlign: 'center'
  }
}));

const RegisterForm = props => {
  const classes = useStyles();

  const handleChange = e => {
    props.setRegisterInfo({
      ...props.registerInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className={classes.registerCont}>
        <Typography variant="h5" component="h3" className={classes.title}>
        <LockIcon/><br/>
          Register
        </Typography>
        <form action="">
          <TextField
            variant="outlined"
            label="Username"
            name="username"
            className={classes.registerInput}
            value={props.registerInfo.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            className={classes.registerInput}
            value={props.registerInfo.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={props.register}
          >
            Register
          </Button>
        </form>
        <Typography className={classes.button}>
          <Box fontSize={12} textAlign="center">
            Already have an account? <Link to="/login">Log in</Link>
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default RegisterForm;