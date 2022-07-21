import React from "react";

import { Carousel } from "react-responsive-carousel";
// Importing Carousel component after installing package
import "react-responsive-carousel/lib/styles/carousel.css";
// Importing the carousel stylesheet
import { Box, Typography } from "@mui/material";

import carouselBase from "../services/elevator-carousel";
// Importing the carousel data array

import { theme } from "../config/color-config";

const ElevatorGallery = () => {
  return (
    <Carousel autoPlay="true">
      {carouselBase.map((slide) => {
        return (
          <Box
            key={slide.id}
            sx={{
              px: "50px",
              py: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: `linear-gradient(20deg, ${theme.palette.primary.main}, black)`,
              borderRadius: "22px",
            }}
          >
            <Box
              sx={{
                mt: "25px",
              }}
            >
              <img alt="" src={slide.img} />
            </Box>
            <Typography
              variant="p"
              component="h6"
              sx={{
                minHeight: "80px",
                my: "20px",
                color: theme.palette.secondary.main,
                fontSize: "22px",
                verticalAlign: "middle",
              }}
            >
              {slide.text}
            </Typography>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ElevatorGallery;
