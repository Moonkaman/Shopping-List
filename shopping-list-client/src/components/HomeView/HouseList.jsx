import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  list: {}
}));

const HouseList = props => {
  const classes = useStyles();

  return (
    <div>
      <List>
        {props.houses.map(house => (
          <div key={house.id}>
            <ListItem button>{house.house_name}</ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default HouseList;
