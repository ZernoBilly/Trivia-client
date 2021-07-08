import { makeStyles } from "@material-ui/core";

import bgimage from "../../pictures/bgimage.jpg";

export default makeStyles((theme) => ({
  mainArea: {
    height: "100vh",
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));
