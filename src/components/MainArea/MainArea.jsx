import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

const MainArea = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid className={classes.main}>Main</Grid>
      <Grid className={classes.lower}>Lower</Grid>
    </Grid>
  );
};

export default MainArea;
