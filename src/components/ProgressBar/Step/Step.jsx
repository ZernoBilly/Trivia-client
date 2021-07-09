import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import useStyles from "./styles";

const Step = ({ amount, step }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.step} key={step}>
      <ListItemText primary={step} className={classes.stepNumber} />
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <ListItemText primary={amount} className={classes.stepAmount} />
    </ListItem>
  );
};

export default Step;
