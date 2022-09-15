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
    <Box
      sx={{
        maxWidth: { lg: "1000px", md: "800px", sm: "600px", xs: "300px" },
      }}
    >
      <Carousel autoPlay infiniteLoop showStatus={false}>
        {carouselBase.map((slide) => {
          return (
            <Box key={slide.id}>
              <Typography
                variant="p"
                sx={{
                  px: "10px",
                  fontSize: { lg: "22px", md: "20px", sm: "18px", xs: "15px" },
                  color: theme.palette.secondary.main,
                  textAlign: "center",
                }}
              >
                {t(slide.text)}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                sx={{
                  mb: "10px",
                }}
              >
                <Box
                  sx={{
                    background: `url(${slide.img})`,
                    backgroundSize: "cover",
                    borderRadius: "50px",
                    border: `5px outset ${Colors.Grey.ultraLight}`,
                    height: {
                      lg: "600px",
                      md: "480px",
                      sm: "300px",
                      xs: "190px",
                    },
                    width: {
                      lg: "800px",
                      md: "640px",
                      sm: "400px",
                      xs: "250px",
                    },
                    m: "20px",
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default ElevatorGallery;
