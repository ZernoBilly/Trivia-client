import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";

const Timer = () => {
  const classes = useStyles();

  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return clearInterval(interval);
  }, []);

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
        <Typography className={classes.time}>{timer}</Typography>
      </Grid>
    </Grid>
  );
};

export default Timer;
