import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";

const Timer = ({ startTimer, timer, setTimer, setStartTimer }) => {
  const classes = useStyles();

  const [timerClassName, setTimerClassName] = useState(classes.timer);

  //Timer to reduce the game clock in 1s intervals
  useEffect(() => {
    if (startTimer) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTimer, setTimer]);

  //Change timer classname depending on seconds lest
  useEffect(() => {
    if (timer < 10) {
      setTimerClassName(classes.timerLow);
    } else {
      setTimerClassName(classes.timer);
    }
  }, [timer, classes.timer, classes.timerLow]);

  return (
    <Grid container direction="column" className={classes.timerContainer}>
      <Grid container direction="row" className={classes.topContainer}>
        <Button className={classes.button}>Scoreboard</Button>
        <Typography variant="h3" component="h1" className={classes.title}>
          Trivia
        </Typography>
        <Button className={classes.button}>Login</Button>
      </Grid>
      <Grid item className={timerClassName}>
        <Typography className={classes.time}>{timer}</Typography>
      </Grid>
    </Grid>
  );
};

export default Timer;
