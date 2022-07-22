import React from "react";

import { Carousel } from "react-responsive-carousel";
// Importing Carousel component after installing package
import "react-responsive-carousel/lib/styles/carousel.css";
// Importing the carousel stylesheet
import { Box, Typography } from "@mui/material";

import reasons from "../services/reasons-to-choose";
// Importing the carousel data array
import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

const Swing = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      {reasons.map((reason) => {
        return (
          <Box
            key={reason.id}
            sx={{
              display: "flex",
              flexdirection: "column",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              px: "50px",
              pt: "30px",
              pb: "40px",
              background: `linear-gradient(to bottom,  ${theme.palette.primary.dark}, white)`,
            }}
          >
            <Typography
              variant="h6"
              component="h1"
              sx={{
                background: `linear-gradient(to top, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
                paddingBottom: "10px",
                minHeight: "140px",
              }}
            >
              {reason.text}
            </Typography>
            <Box
              sx={{
                background: `url(${reason.img})`,
                backgroundSize: "cover",
                borderRadius: "50px",
                border: `5px outset ${Colors.Grey.ultraLight}`,
                height: "500px",
                width: "700px",
                mb: "20px",
              }}
            />
          </Box>
        );
      })}
    </Carousel>
  );
};

export default Swing;
