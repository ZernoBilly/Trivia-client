import React, { useState } from "react";
import { List } from "@material-ui/core";

import Step from "./Step/Step";

import useStyles from "./styles";

import stepPyramid from "../../Data/stepPyramid";

//Reverse step pyramid
const reversedStepPyramid = () => {
  const newStepPyramid = [...stepPyramid];
  return newStepPyramid.reverse();
};

const ProgressBar = ({ currentQuestion }) => {
  const classes = useStyles();

  return (
    <div className={classes.progressBar}>
      <div className={classes.list}>
        <List>
          {reversedStepPyramid().map((list) => (
            <Step
              currentQuestion={currentQuestion}
              step={list.step}
              amount={list.amount}
              key={list.step.toString()}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

export default ProgressBar;
