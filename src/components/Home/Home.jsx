import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

import MainArea from "../MainArea/MainArea";
import ProgressBar from "../ProgressBar/ProgressBar";

import stepPyramid from "../../Data/stepPyramid";

const Home = () => {
  const classes = useStyles();

  const initQuestion = {
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: [],
  };

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [question, setQuestion] = useState(initQuestion);
  const [score, setScore] = useState(0);

  //Fetch data from API
  const fetchQuestions = async (difficulty) => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&type=multiple`
    );
    setQuestion(data.results[0]);
  };

  return (
    <div>
      <Grid container maxwidth="xl" className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <MainArea
            score={score}
            question={question}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
            fetchQuestions={fetchQuestions}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <ProgressBar stepPyramid={stepPyramid} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
