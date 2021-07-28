import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  step: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "1rem",
    margin: "0.8rem 0rem",
    justifyContent: "space-between",
    width: "20rem",
    height: "2.3rem",
  },
  activeStep: {
    backgroundColor: theme.palette.info.light,
    borderRadius: "1rem",
    margin: "0.8rem 0rem",
    justifyContent: "space-between",
    width: "20rem",
    height: "2.3rem",
    border: "1px solid",
    borderColor: theme.palette.primary.light,
  },
  stepNumber: {
    color: theme.palette.dark.dark,
  },
  stepAmount: {
    color: theme.palette.dark.dark,
  },
}));
