import { createTheme } from "@mui/material";

const widthConfig = createTheme({
  breakpoints: {
    values: {
      mS: 320,
      // Small mobile resolution
      mM: 375,
      // Medium mobile resolution
      mL: 425,
      // Large mobile resolution
      tb: 768,
      // Standard tablet resolution
      lp: 1024,
      // Standard laptop resolution
      wsS: 1440,
      // Standard widescreen resolution
      wsM: 1600,
      // Bigger widescreen resolution
      wsL: 1920,
      // Large widescreen resolution
    },
  },
});

export default widthConfig;