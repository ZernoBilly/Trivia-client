import React, { useEffect, useState } from "react";
import { Grid, Button, Typography, Paper, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import useStyles from "./styles";

import stepPyramid from "../../../Data/stepPyramid";

const QuestionAndAnswers = ({
  score,
  question,
  setCurrentQuestion,
  currentQuestion,
  fetchQuestions,
}) => {
  const classes = useStyles();

  const [shuffledAnswers, setShuffledAnswers] = useState();

  //Encode missing quetes from fetched data
  const encodedText = (text) => {
    let encodedText = text.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
    return encodedText;
  };
  //Get difficulty from stepPyramid
  const difficulty = stepPyramid[currentQuestion - 1].difficulty;

  useEffect(() => {
    console.log(question);

    setShuffledAnswers(
      handleShuffle([
        question[currentQuestion].correct_answer,
        ...question[currentQuestion].incorrect_answers,
      ])
    );
  }, [currentQuestion]);

  //Shuffle answers
  const handleShuffle = (answers) => {
    return answers.sort(() => Math.random() - 0.5);
  };

  console.log(shuffledAnswers);

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
              {encodedText(question.category)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.questionField}>
            <Typography className={classes.question}>
              {encodedText(question.question)}
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
              {score}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.actionButtonContainer}>
          <IconButton className={classes.stopButton} size="medium">
            <StopIcon />
          </IconButton>
          <IconButton
            className={classes.startButton}
            onClick={() => {
              fetchQuestions(difficulty);
              setCurrentQuestion(currentQuestion + 1);

              console.log(currentQuestion);
              console.log(difficulty);
            }}
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton
            className={classes.nextButton}
            onClick={() => {
              fetchQuestions(difficulty);
              setCurrentQuestion(currentQuestion + 1);

              console.log(currentQuestion);
              console.log(difficulty);
            }}
          >
            <SkipNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default QuestionAndAnswers;
