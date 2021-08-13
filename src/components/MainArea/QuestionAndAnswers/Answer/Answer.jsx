import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

import useStyles from "./styles";

const Answer = ({
  answer,
  correctAnswer,
  selectedAnswer,
  setSelectedAnswer,
  score,
  setScore,
  currentStepAmount,
  stopGame,
  setStartTimer,
}) => {
  const classes = useStyles();

  const [buttonClassName, setButtonClassName] = useState(classes.answerButton);

  const handleClick = () => {
    if (correctAnswer === answer) {
      setButtonClassName(classes.correctAnswerButton);
      setScore(score + currentStepAmount);
      setStartTimer(false);
    } else {
      setButtonClassName(classes.incorrectAnswerButton);
      setScore(0);
      stopGame();
    }
    setSelectedAnswer(answer);
  };

  return (
    <Grid item xs={12} sm={6} className={classes.answer}>
      <Button
        disabled={selectedAnswer !== "" ? true : false}
        className={buttonClassName}
        onClick={() => handleClick()}
      >
        {answer}
      </Button>
    </Grid>
  );
};

export default Answer;
