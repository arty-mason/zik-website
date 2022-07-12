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
    /*     warning: {
          main: '#ffc071',
          dark: '#ffb25e',
        },
        error: {
          light: "#ffebee",
          main: "#f44336",
          dark: "#d32f2f",
        },
        success: {
          light: "e8f5e9",
          main: "#4caf50",
          dark: "388e3c",
        },
        ///Additionally imported palette
        */
  }
})