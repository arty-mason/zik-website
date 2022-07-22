import React from "react";

import { Carousel } from "react-responsive-carousel";
// Importing Carousel component after installing package
import "react-responsive-carousel/lib/styles/carousel.css";
// Importing the carousel stylesheet
import { Box } from "@mui/material";

import reasons from "../services/reasons-to-choose";
// Importing the carousel data array
import CustomText from "../shared/custom-text";
import { theme } from "../config/color-config";

const Swing = () => {
  return (
    <Carousel autoPlay="true">
      {reasons.map((reason) => {
        return (
          <Box
            container
            spacing={3}
            key={reason.id}
            sx={{
              px: "50px",
              pt: "30px",
              pb: "40px",
              background: `linear-gradient(to bottom,  ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              /*  borderRadius: "20px", */
            }}
          >
            <CustomText
              variant="h6"
              component="h1"
              sx={{
                background: `linear-gradient(to top, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
                paddingBottom: "10px",
                minHeight: "140px",
              }}
            >
              {reason.text}
            </CustomText>
            {/* <Box
              sx={{
                background: `url(${reason.img}})`,
                backgroundSize: "cover",
                height: "400px",
                width: "400px",
              }}
            /> 
            //! Not working for some reason, requires debugging
            */}
            <Box
              sx={{
                display: "flex",
                flexShrink: "1",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                alt={reason.name}
                src={reason.img}
                sx={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default Swing;
