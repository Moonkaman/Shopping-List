import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  masterCont: {
    maxWidth: "800px",
    margin: "0 auto"
  },
  listCont: {
    maxWidth: "800px",
    margin: "0 auto",
    overflow: "hidden"
  },
  cardTitleBar: {
    padding: "8px 12px"
  }
}));

const HouseList = props => {
  const classes = useStyles();

  return (
    <div className={classes.masterCont}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Join an existing House
      </Typography>
      <Paper className={classes.listCont}>
        <AppBar
          position="static"
          color="primary"
          elevation="0"
          className={classes.cardTitleBar}
        >
          <Typography variant="h6" color="inherit">
            Houses
          </Typography>
        </AppBar>
        <List>
          {props.houses.map(house => (
            <div key={house.id}>
              <ListItem button>{house.house_name}</ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default HouseList;
