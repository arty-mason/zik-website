import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#005b84",
      light: "#4888b4",
      dark: "#003257",
    },
    secondary: {
      main: "#fbaf1a",
      light: "#ffe155",
      dark: "#c38000",
    },
    //  Client palette
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    /*     error: {
          light: red[50],
          main: red[500],
          dark: red[700],
        },
        success: {
          light: green[50],
          main: green[500],
          dark: green[700],
        }, */
    // Additionally imported palette
  }
})