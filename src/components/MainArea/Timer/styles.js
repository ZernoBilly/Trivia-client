import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  timerContainer: {
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    width: "8rem",
    height: "8rem",
    borderRadius: "50%",
    border: "0.5rem solid",
    borderColor: theme.palette.optional.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    color: theme.palette.primary.main,
    fontSize: "4rem",
  },
}));
