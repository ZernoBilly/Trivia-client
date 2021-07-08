import React from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

import TopBar from "../TopBar/TopBar";
import MainArea from "../MainArea/MainArea";
import ProgressBar from "../ProgressBar/ProgressBar";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container maxWidth="xl" className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <MainArea />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <ProgressBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
