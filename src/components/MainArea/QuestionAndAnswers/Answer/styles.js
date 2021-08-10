import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  answer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  answerButton: {
    width: "25rem",
    height: "3rem",
    color: theme.palette.optional.main,
    backgroundColor: theme.palette.dark.main,
    borderRadius: "1rem",
    border: "0.2rem solid",
    borderColor: theme.palette.optional.dark,

    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      borderColor: theme.palette.dark.main,
    },
  },
  correctAnswerButton: {
    width: "25rem",
    height: "3rem",
    color: theme.palette.optional.main,
    backgroundColor: theme.palette.success.main,
    borderRadius: "1rem",

    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },
  incorrectAnswerButton: {
    width: "25rem",
    height: "3rem",
    color: theme.palette.dark.dark,
    backgroundColor: theme.palette.warning.main,
    borderRadius: "1rem",

    "&:hover": {
      backgroundColor: theme.palette.warning.main,
    },
  },
}));
