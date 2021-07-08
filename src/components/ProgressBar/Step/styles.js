import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  step: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "1rem",
    margin: "1rem 0rem",
    justifyContent: "space-between",
    width: "20rem",
    height: "2.3rem",
  },
  activeStep: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: "1rem",
    margin: "0.5rem",
    justifyContent: "space-between",
    width: "20rem",
  },
  stepNumber: {},
  stepAmount: {},
}));
