import React, { useState } from "react";
import { List } from "@material-ui/core";

import Step from "./Step/Step";

import useStyles from "./styles";

import reversedStepPyramid from "../../Data/reversedStepPyramid";

const MainArea = ({}) => {
  const classes = useStyles();

  const [stepNumber, setStepNumber] = useState(1);

  return (
    <div className={classes.progressBar}>
      <div className={classes.list}>
        <List>
          {reversedStepPyramid.map((list) => (
            <Step
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

export default MainArea;
