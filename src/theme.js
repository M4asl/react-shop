import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#57b5b6",
    },
    secondary: {
      main: "#f6cc5c",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
