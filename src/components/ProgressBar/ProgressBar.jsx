import React, { useContext } from "react";
import { List } from "@material-ui/core";

import Step from "./Step/Step";

import useStyles from "./styles";

import TriviaContext from "../../context/triviaContext";

const ProgressBar = ({}) => {
  const classes = useStyles();

  const { state, stepPyramid, currentStep } = useContext(TriviaContext);

  //Reverse step pyramid
  const reversedStepPyramid = () => {
    const newStepPyramid = [...stepPyramid];
    return newStepPyramid.reverse();
  };

  return (
    <div className={classes.progressBar}>
      <div className={classes.list}>
        <List>
          {reversedStepPyramid().map((steps) => (
            <Step
              step={steps.step}
              amount={steps.amount}
              key={steps.step}
              currentStep={currentStep}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

export default ProgressBar;
