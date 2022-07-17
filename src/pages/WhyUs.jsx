import React from "react";

import { Box, Paper } from "@mui/material";

import Swing from "../components/WhyUsCarousel";

const WhyUs = () => {
  return (
    <Box
      elevation={10}
      sx={{
        my: "50px",
        mx: "65px",
      }}
    >
      <Paper
        elevation={20}
        sx={{
          borderRadius: "15px",
        }}
      >
        <Swing />
      </Paper>
    </Box>
  );
};

export default WhyUs;
