import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

import useStyles from "./styles";
import theme from "./theme";
import Home from "./components/Home/Home";

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" className={classes.root}>
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
