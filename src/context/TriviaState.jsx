import React, { useState } from "react";

import TriviaContext from "./TriviaContext";

const TriviaState = (props) => {
  const initQuestion = {
    category: "",
    type: "",
    difficulty: "easy",
    question: "",
    correct_answer: "",
    incorrect_answers: [],
  };

  const [question, setQuestion] = useState(initQuestion);

  return (
    <TriviaContext.Provider
      value={{
        question,
        setQuestion,
      }}
    >
      {props.children}
    </TriviaContext.Provider>
  );
};

export default TriviaState;
