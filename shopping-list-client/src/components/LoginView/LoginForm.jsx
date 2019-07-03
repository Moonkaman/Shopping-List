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
  loginCont: {
    maxWidth: "250px",
    margin: "0 auto",
    padding: "20px"
  },
  loginInput: {
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

const LoginForm = props => {
  const classes = useStyles();

  const handleChange = e => {
    props.setLoginInfo({
      ...props.loginInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className={classes.loginCont}>
        <Typography variant="h5" component="h3" className={classes.title}>
          <LockIcon/><br/>
          Login
        </Typography>
        <form action="">
          <TextField
            variant="outlined"
            label="Username"
            name="username"
            className={classes.loginInput}
            value={props.loginInfo.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            name="password"
            className={classes.loginInput}
            value={props.loginInfo.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={props.login}
          >
            Log in
          </Button>
        </form>
        <Typography className={classes.button}>
          <Box fontSize={12} textAlign="center">
            Don't have an account? <Link to="/register">Register</Link>
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default LoginForm;
