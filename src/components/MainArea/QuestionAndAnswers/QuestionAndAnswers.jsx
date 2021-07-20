import React, { useContext } from "react";
import axios from "axios";
import { Grid, Button, Typography, Paper, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import useStyles from "./styles";

import triviaContext from "../../../context/triviaContext";

const QuestionAndAnswers = () => {
  const classes = useStyles();

  const {
    state,
    fetchEasyQuestion,
    fetchMediumQuestion,
    fetchHardQuestion,
    currentStep,
    setCurrentStep,
    stepPyramid,
  } = useContext(triviaContext);

  const handleNextQuestion = () => {
    const newStep = currentStep;
    setCurrentStep(stepPyramid[newStep.step + 1]);
    getQuestions();
  };

  const getQuestions = () => {
    switch (currentStep.difficulty) {
      case "easy":
        getEasyQuestions();
        break;
      case "medium":
        getMediumQuestions();
        break;
      case "hard":
        getHardQuestions();
        break;
    }
  };

  const getEasyQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`
    );
    fetchEasyQuestion(data.results[0]);
  };

  const getMediumQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple`
    );
    fetchMediumQuestion(data.results[0]);
  };

  const getHardQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple`
    );
    fetchHardQuestion(data.results[0]);
  };

  console.log(currentStep.step);

  //Encode missing quetes from fetched data
  const encodeText = (text) => {
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
            <Typography className={classes.category}>
              {state.category ? state.category : "Category"}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.questionField}>
            <Typography className={classes.question}>
              {state.category ? encodeText(state.question) : "Question"}
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
          <Button className={classes.answerButton}></Button>
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
          <IconButton
            className={classes.startButton}
            onClick={() => getQuestions()}
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton
            className={classes.nextButton}
            onClick={() => handleNextQuestion()}
          >
            <SkipNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuestionAndAnswers;
