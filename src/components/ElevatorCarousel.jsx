import React from "react";

import { Carousel } from "react-responsive-carousel";
// Importing Carousel component after installing package
import "react-responsive-carousel/lib/styles/carousel.css";
// Importing the carousel stylesheet
import { Box, Typography } from "@mui/material";

import carouselBase from "../services/elevator-carousel";
// Importing the carousel data array

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";
import { useTranslation } from "react-i18next";

const ElevatorGallery = () => {
  const { t } = useTranslation();
  return (
    <Carousel autoPlay infiniteLoop>
      {carouselBase.map((slide) => {
        return (
          <Box
            key={slide.id}
            sx={{
              py: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, white )`,
              borderRadius: "22px",
            }}
          >
            <Typography
              variant="p"
              component="h6"
              sx={{
                minHeight: "60px",
                mt: "20px",
                mb: "10px",
                px: "40px",
                color: theme.palette.secondary.main,
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              {t(slide.text)}
            </Typography>
            <Box
              sx={{
                background: `url(${slide.img})`,
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

export default ElevatorGallery;
