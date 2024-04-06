/* Code for the theme of my Website and the color palette
CreateTheme from Material UI used for this functionality */

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