import { Container } from "@material-ui/core";

import useStyles from "./styles";

import Home from "./components/Home/Home";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Home />
    </Container>
  );
};

export default App;
