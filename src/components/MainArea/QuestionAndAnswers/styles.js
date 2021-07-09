import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  questionsAndAnswersContainer: {
    height: "50%",
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
  },
  question: {
    color: theme.palette.optional.main,
  },
  answersContainer: {
    height: "50%",
    width: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "2rem",
  },
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
  scoreField: {
    textAlign: "center",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.dark.main,
  },
  score: {
    color: theme.palette.primary.main,
  },
}));