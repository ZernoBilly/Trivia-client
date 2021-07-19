import React from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

import useStyles from "./styles";
import theme from "./theme";
import Home from "./components/Home/Home";

import TriviaState from "./context/TriviaState";

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <TriviaState>
        <Container maxWidth="xl" className={classes.root}>
          <Home />
        </Container>
      </TriviaState>
    </ThemeProvider>
  );
};

export default App;
