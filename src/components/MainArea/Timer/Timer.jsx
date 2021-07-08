import React from "react";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Timer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.timerContainer}>
      <Grid item className={classes.timer}>
        <Typography className={classes.time}>30</Typography>
      </Grid>
    </Grid>
  );
};

export default Timer;
