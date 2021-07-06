import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import BarChartIcon from "@material-ui/icons/BarChart";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.topBar}
      position="static"
      fullWidth
      elevation={0}
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Trivia
        </Typography>

        <Button size="small" color="inherit" className={classes.loginButton}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
