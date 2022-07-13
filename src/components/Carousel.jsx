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
// import { Colors } from "../config/design-config";

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
              py: "30px",
              flexDirection: "column",
              justifyContent: "space-around",
              // backgroundColor: Colors.Grey.ultraLight,
            }}
          >
            <CustomText
              variant="h4"
              component="h1"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              {reason.name}
            </CustomText>
            <CustomText
              variant="h6"
              component="h1"
              sx={{
                color: theme.palette.primary.main,
                paddingBottom: "10px",
              }}
            >
              {reason.text}
            </CustomText>
            <img alt={reason.name} src={reason.img} />
          </Box>
        );
      })}
    </Carousel>
  );
};

export default Swing;
