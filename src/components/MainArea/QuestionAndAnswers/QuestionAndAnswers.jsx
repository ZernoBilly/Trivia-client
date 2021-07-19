import React, { useContext } from "react";
import { Grid, Button, Typography, Paper, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import useStyles from "./styles";

import stepPyramid from "../../../Data/stepPyramid";

import TriviaContext from "../../../context/TriviaContext";

const QuestionAndAnswers = () => {
  const classes = useStyles();

  const { question } = useContext(TriviaContext);

  //Encode missing quetes from fetched data
  const encodedText = (text) => {
    let encodedText = text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    return encodedText;
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.questionsAndAnswersContainer}
    >
      <Grid container className={classes.questionContainer}>
        <Grid item xs={4}>
          <Paper className={classes.categoryField}>
            <Typography className={classes.category}>Category</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.questionField}>
            <Typography className={classes.question}>Question</Typography>
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
          <Button className={classes.answerButton}>
            {question.difficulty}
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.scoreField}>
            <Typography variant="h5" className={classes.scoreAmount}>
              Score
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.actionButtonContainer}>
          <IconButton className={classes.stopButton} size="medium">
            <StopIcon />
          </IconButton>
          <IconButton className={classes.startButton}>
            <PlayArrowIcon />
          </IconButton>
          <IconButton className={classes.nextButton}>
            <SkipNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuestionAndAnswers;
