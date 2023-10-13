import { createTheme } from "@mui/material/styles";

//#region Theme
const siteTheme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    button: {
      fontWeight: 700,
    },
  },
}
);

export default siteTheme;

//#endregion