import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import Timer from "./Timer/Timer";
import QuestionAndAnswers from "./QuestionAndAnswers/QuestionAndAnswers";

import useStyles from "./styles";

const MainArea = () => {
  const classes = useStyles();

  const [startTimer, setStartTimer] = useState(false);
  const [timer, setTimer] = useState(30);

  return (
    <Grid container className={classes.mainArea} direction="column">
      <Timer
        startTimer={startTimer}
        timer={timer}
        setTimer={setTimer}
        setStartTimer={setStartTimer}
      />
      <QuestionAndAnswers
        setStartTimer={setStartTimer}
        timer={timer}
        setTimer={setTimer}
      />
    </Grid>
  );
};

export default MainArea;
