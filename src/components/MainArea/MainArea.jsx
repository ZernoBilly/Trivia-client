import React from "react";
import { Grid } from "@material-ui/core";

import Timer from "./Timer/Timer";
import QuestionAndAnswers from "./QuestionAndAnswers/QuestionAndAnswers";

import useStyles from "./styles";

const MainArea = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainArea} direction="column">
      <Timer />
      <QuestionAndAnswers />
    </Grid>
  );
};

export default MainArea;
