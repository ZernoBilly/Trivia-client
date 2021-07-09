import React from "react";
import { Grid } from "@material-ui/core";

import Timer from "./Timer/Timer";
import QuestionAndAnswers from "./QuestionAndAnswers/QuestionAndAnswers";

import useStyles from "./styles";

const MainArea = ({
  score,
  question,
  setCurrentQuestion,
  currentQuestion,
  fetchQuestions,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainArea} direction="column">
      <Timer />
      <QuestionAndAnswers
        score={score}
        question={question}
        setCurrentQuestion={setCurrentQuestion}
        currentQuestion={currentQuestion}
        fetchQuestions={fetchQuestions}
      />
    </Grid>
  );
};

export default MainArea;
