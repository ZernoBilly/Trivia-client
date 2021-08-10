import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F3D849",
      dark: "#aa9733",
      light: "#f5df6d",
    },
    secondary: {
      main: "#0A62D0",
      dark: "#074491",
      light: "#3b81d9",
    },
    optional: {
      main: "#E0E5E9",
      dark: "#9ca0a3",
      light: "#e6eaed",
    },
    dark: {
      main: "#191718",
      dark: "#111010",
      light: "#474546",
    },
    success: {
      main: "#2CCCC3",
      dark: "#1e8e88",
      light: "#56d6cf",
    },
    warning: {
      main: "#E60576",
      dark: "#a10352",
      light: "#eb3791",
    },
    info: {
      main: "#5626C4",
      dark: "#3c1a89",
      light: "#7751cf",
    },
    action: {
      disabled: "#E0E5E9",
      disabledOpacity: "1",
    },
  },
});

export default theme;
