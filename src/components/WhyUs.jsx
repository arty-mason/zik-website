import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import Swing from "./Carousel";
import { Colors } from "../config/design-config";
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
        color={theme.palette.primary.dark}
      >
        Почему выбирают нас?
      </Typography>
      <Paper
        elevation={15}
        sx={{
          border: "2px solid #262626",
          borderRadius: "15px",
          backgroundColor: Colors.Grey.ultraLight,
        }}
      >
        <Swing />
      </Paper>
    </Box>
  );
};

export default WhyUs;
