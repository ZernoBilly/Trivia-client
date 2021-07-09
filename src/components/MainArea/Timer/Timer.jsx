import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";

const Timer = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.timerContainer}>
      <Grid container direction="row" className={classes.topContainer}>
        <Button className={classes.button}>Scoreboard</Button>
        <Typography variant="h3" component="h1" className={classes.title}>
          Trivia
        </Typography>
        <Button className={classes.button}>Login</Button>
      </Grid>
      <Grid item className={classes.timer}>
        <Typography className={classes.time}>30</Typography>
      </Grid>
    </Grid>
  );
};

export default Timer;
