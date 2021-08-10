import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Paper, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import Answer from "./Answer/Answer";

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
    answers,
    setAnswers,
    gameIsStarted,
    setGameIsStarted,
    score,
    setScore,
  } = useContext(triviaContext);

  useEffect(() => {
    if (gameIsStarted) {
      setAnswers(shuffleAnswers());
    }
  }, [state]);

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [scoreStatus, setScoreStatus] = useState("Score:");

  //Increase current step number
  const handleNextQuestion = () => {
    const newStep = [...stepPyramid];
    setCurrentStep(newStep[currentStep.step - 1 + 1]);
    setSelectedAnswer("");
  };

  //Check difficulty of current step
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
      default:
        break;
    }
  };

  //Fetch easy question
  const getEasyQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple`
    );
    fetchEasyQuestion(data.results[0]);
  };

  //Fetch medium question
  const getMediumQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple`
    );
    fetchMediumQuestion(data.results[0]);
  };

  //Fetch hard question
  const getHardQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple`
    );
    fetchHardQuestion(data.results[0]);
  };

  //Encode missing quetes and characters from fetched data
  const encodeText = (text) => {
    let encodedText = text
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&eacute;/g, "é")
      .replace(/&rsquo;/g, "'")
      .replace(/&rdquo;/g, "'")
      .replace(/&ldquo;/g, "'");
    return encodedText;
  };

  //Shuffle correct- and incorrect answers
  const shuffleAnswers = () => {
    const shuffledAnswers = [
      ...state.incorrect_answers,
      state.correct_answer,
    ].sort(() => Math.random() - 0.5);

    return shuffledAnswers;
  };

  //Start game
  const startGame = () => {
    getQuestions();
    setGameIsStarted(true);
    setSelectedAnswer("");
    setScore(0);
    setScoreStatus("Score:");
  };

  //Stop Game
  const stopGame = () => {
    setGameIsStarted(false);
    setCurrentStep(stepPyramid[0]);
    setScoreStatus("Final Score:");
    setSelectedAnswer("none");
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
        <Grid item xs={3}>
          <Paper className={classes.scoreField}>
            <Typography variant="h5" className={classes.scoreAmount}>
              {scoreStatus} {score}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={classes.answersContainer}>
        {answers ? (
          answers.map((a) => (
            <Answer
              key={a}
              answer={a}
              correctAnswer={state.correct_answer}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
              score={score}
              setScore={setScore}
              currentStepAmount={currentStep.amount}
              stopGame={stopGame}
            />
          ))
        ) : (
          <Grid item xs={12} className={classes.pressStart}>
            Press Start
          </Grid>
        )}

        <Grid item xs={12} className={classes.actionButtonContainer}>
          <IconButton
            className={classes.stopButton}
            disabled={!gameIsStarted}
            onClick={() => stopGame()}
          >
            <StopIcon />
          </IconButton>
          <IconButton
            className={classes.startButton}
            disabled={gameIsStarted}
            onClick={() => startGame()}
          >
            <PlayArrowIcon />
          </IconButton>
          <IconButton
            disabled={!gameIsStarted || !selectedAnswer}
            className={classes.nextButton}
            onClick={() => {
              handleNextQuestion();
              getQuestions();
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
