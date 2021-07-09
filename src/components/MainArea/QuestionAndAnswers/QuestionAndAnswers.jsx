import React from "react";
import { Grid, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const QuestionAndAnswers = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.questionsAndAnswersContainer}
    >
      <Grid container className={classes.questionContainer}>
        <Grid item xs={4}>
          <Paper className={classes.categoryField}>
            <Typography className={classes.category}>
              CategoryCategoryCategory
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.questionField}>
            <Typography className={classes.question}>
              QuestionQuestionQuestionQuestionQuestionQuestionQuestion
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.answersContainer}>
        <Grid item xs={12} sm={6} className={classes.answer}>
          <Button className={classes.answerButton}>Answer</Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.answer}>
          <Button className={classes.answerButton}>Answer</Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.answer}>
          <Button className={classes.answerButton}>Answer</Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.answer}>
          <Button className={classes.answerButton}>Answer</Button>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.scoreField}>
            <Typography variant="h5" className={classes.scoreAmount}>
              500
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuestionAndAnswers;
