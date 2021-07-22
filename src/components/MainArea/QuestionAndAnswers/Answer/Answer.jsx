import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

import useStyles from "./styles";

const Answer = ({ answer, correctAnswer }) => {
  const classes = useStyles();

  const [buttonClassName, setButtonClassName] = useState(classes.answerButton);

  const handleClick = () => {
    if (correctAnswer === answer) {
      setButtonClassName(classes.correctAnswerButton);
    } else {
      setButtonClassName(classes.incorrectAnswerButton);
    }
  };

  return (
    <Grid item xs={12} sm={6} className={classes.answer}>
      <Button className={buttonClassName} onClick={() => handleClick()}>
        {answer}
      </Button>
    </Grid>
  );
};

export default Answer;
