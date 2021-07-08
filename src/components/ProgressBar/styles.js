import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  progressBar: {
    height: "100vh",
    backgroundColor: theme.palette.dark.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
