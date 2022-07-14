import React from "react";

import { Carousel } from "react-responsive-carousel";
// Importing Carousel component after installing package
import "react-responsive-carousel/lib/styles/carousel.css";
// Importing the carousel stylesheet
import { Box, Typography } from "@mui/material";

import elevatorServices from "../services/elevator-services";
// Importing the carousel data array

import { theme } from "../config/color-config";

const Gallery = () => {
  return (
    <Carousel autoPlay="true">
      {elevatorServices.map((service) => {
        return (
          <Box
            container
            spacing={3}
            key={service.id}
            sx={{
              px: "50px",
              py: "30px",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              {service.serviceName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                ml: "11%",
                py: "30px",
                width: "800px",
                height: "600px",
              }}
            >
              <img alt={service.alt} src={service.img} />
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default Gallery;
