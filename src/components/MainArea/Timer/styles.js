import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  timerContainer: {
    height: "45%",
    display: "flex",
    alignItems: "center",
  },
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: theme.palette.primary.dark,
  },
  button: {
    width: "8rem",
    margin: "0 2rem",
    backgroundColor: theme.palette.info.light,
    color: theme.palette.primary.light,
    borderRadius: "1rem",
    border: "0.2rem solid",
    borderColor: theme.palette.dark.dark,

    "&:hover": {
      backgroundColor: theme.palette.info.dark,
      borderColor: theme.palette.dark.light,
    },
  },
  timer: {
    marginTop: "8rem",
    width: "8rem",
    height: "8rem",
    borderRadius: "50%",
    border: "0.5rem solid",
    borderColor: theme.palette.optional.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  timerLow: {
    marginTop: "8rem",
    width: "8rem",
    height: "8rem",
    borderRadius: "50%",
    border: "0.5rem solid",
    borderColor: theme.palette.warning.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    color: theme.palette.primary.main,
    fontSize: "4rem",
  },
}));
