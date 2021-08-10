import React, { useState, useReducer } from "react";

import TriviaContext from "./triviaContext";
import questionReducer from "./triviaReducer";
import {
  FETCH_EASY_QUESTION,
  FETCH_MEDIUM_QUESTION,
  FETCH_HARD_QUESTION,
} from "./constants";
import stepPyramid from "../Data/stepPyramid";

const TriviaState = (props) => {
  const initQuestion = {
    category: "Category",
    correct_answer: "",
    incorrect_answers: [],
    question: "Question",
  };

  const [currentStep, setCurrentStep] = useState(stepPyramid[0]);
  const [answers, setAnswers] = useState();
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [score, setScore] = useState(0);

  const [state, dispatch] = useReducer(questionReducer, initQuestion);

  const fetchEasyQuestion = (question) => {
    dispatch({
      type: FETCH_EASY_QUESTION,
      payload: question,
    });
  };

  const fetchMediumQuestion = (question) => {
    dispatch({
      type: FETCH_MEDIUM_QUESTION,
      payload: question,
    });
  };

  const fetchHardQuestion = (question) => {
    dispatch({
      type: FETCH_HARD_QUESTION,
      payload: question,
    });
  };

  return (
    <TriviaContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </TriviaContext.Provider>
  );
};

export default TriviaState;
