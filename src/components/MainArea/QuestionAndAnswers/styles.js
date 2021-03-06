import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  questionsAndAnswersContainer: {
    height: "55%",
    display: "flex",
    alignItems: "center",
  },
  questionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  categoryField: {
    backgroundColor: theme.palette.dark.main,
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: "1rem",
    border: "0.2rem solid",
    borderColor: theme.palette.optional.dark,
    minHeight: "1.4rem",
  },
  category: {
    color: theme.palette.optional.main,
  },
  questionField: {
    backgroundColor: theme.palette.dark.main,
    padding: theme.spacing(2),
    textAlign: "center",
    borderRadius: "1rem",
    border: "0.2rem solid",
    borderColor: theme.palette.optional.dark,
    marginTop: "0.8rem",
    minHeight: "1.8rem",
  },
  question: {
    color: theme.palette.optional.main,
    fontSize: "1.1rem",
  },
  answersContainer: {
    height: "50%",
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1rem",
  },

  scoreField: {
    textAlign: "center",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.dark.main,
    marginTop: "1rem",
    borderRadius: "3rem",
  },

  finalScoreField: {
    textAlign: "center",
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.primary.light,
    marginTop: "1rem",
    borderRadius: "3rem",
    border: "1px solid",
  },

  actionButtonContainer: {
    display: "flex",
    alignItems: "space-between",
    justifyContent: "center",
    marginTop: "1rem",
  },
  stopButton: {
    color: theme.palette.warning.light,
    backgroundColor: theme.palette.info.main,
    margin: "0 2rem",

    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  startButton: {
    color: theme.palette.success.light,
    backgroundColor: theme.palette.info.main,
    margin: "0 2rem",

    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
  nextButton: {
    color: theme.palette.success.light,
    backgroundColor: theme.palette.info.main,
    margin: "0 2rem",

    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
  pressStart: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.3rem",
    color: theme.palette.primary.main,
  },
}));
