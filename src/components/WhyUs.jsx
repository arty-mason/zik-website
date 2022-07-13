import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import Swing from "./Carousel";

import { theme } from "../config/color-config";

const WhyUs = () => {
  return (
    <Box
      elevation={10}
      sx={{
        my: "50px",
        mx: "65px",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        marginBottom={3}
        textAlign="center"
        color={theme.palette.secondary.dark}
      >
        Почему выбирают нас?
      </Typography>
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
