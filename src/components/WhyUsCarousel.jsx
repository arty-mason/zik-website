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
import { useTranslation } from "react-i18next";

const Swing = () => {
  const [t] = useTranslation();
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
              component="h1"
              sx={{
                background: `linear-gradient(to top, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
                paddingBottom: "10px",
                minHeight: "140px",
                fontSize: { lg: "25px", md: "21px", sm: "18px", xs: "10px" },
              }}
            >
              {t(reason.text)}
            </Typography>
            <Box
              sx={{
                background: `url(${reason.img})`,
                backgroundSize: "cover",
                borderRadius: "50px",
                border: `5px outset ${Colors.Grey.ultraLight}`,
                height: { lg: "500px", md: "400px", sm: "250px", xs: "80px" },
                width: { lg: "700px", md: "500px", sm: "350px", xs: "200px" },
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
