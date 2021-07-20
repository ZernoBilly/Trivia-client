import React from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

import MainArea from "../MainArea/MainArea";
import ProgressBar from "../ProgressBar/ProgressBar";

import stepPyramid from "../../Data/stepPyramid";

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container maxwidth="xl" className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <MainArea />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <ProgressBar stepPyramid={stepPyramid} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
