import React, { useState } from "react";
import { List } from "@material-ui/core";

import Step from "./Step/Step";

import stepPyramid from "../../Data/stepPyramid";

import useStyles from "./styles";

const MainArea = () => {
  const classes = useStyles();

  const [stepNumber, setStepNumber] = useState(1);

  return (
    <div className={classes.progressBar}>
      <div className={classes.list}>
        <List>
          {stepPyramid.map((list) => (
            <Step
              step={list.step}
              amount={list.amount}
              stepClassName={stepNumber === list.step ? "activeStep" : "step"}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

export default MainArea;
