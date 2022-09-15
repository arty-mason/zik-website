import React from "react";

import { Carousel } from "react-responsive-carousel";
// Importing Carousel component after installing package
import "react-responsive-carousel/lib/styles/carousel.css";
// Importing the carousel stylesheet
import { Box, Card, Typography, useMediaQuery } from "@mui/material";

import reasons from "../services/reasons-to-choose";
// Importing the carousel data array
import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";
import { useTranslation } from "react-i18next";

const Swing = () => {
  const [t] = useTranslation();
  const isSmallScreen = useMediaQuery("(max-width:599px)");

  return (
    <>
      {isSmallScreen ? (
        <>
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <Card
                key={reason.id}
                sx={{
                  display: "flex",
                  flexdirection: "column",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-around",
                  p: "15px",
                  my: "20px",
                  background: `linear-gradient(to bottom,  ${theme.palette.primary.dark}, white)`,
                  borderRadius: "25px",
                }}
              >
                <Typography
                  component="h1"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.secondary.main,
                    textShadow: "2px 2px 2px black",
                    paddingBottom: "10px",
                    minHeight: "140px",
                    fontSize: "15px",
                  }}
                >
                  {t(reason.text)}
                </Typography>
                <IconComponent
                  sx={{
                    color: Colors.Grey.main,
                    width: "100px",
                    height: "100px",
                  }}
                />
              </Card>
            );
          })}
        </>
      ) : (
        <Carousel autoPlay infiniteLoop showStatus={false}>
          {reasons.map((reason) => {
            return (
              <Box
                key={reason.id}
                sx={{
                  display: "flex",
                  flexdirection: "column",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-around",
                  px: { lg: "50px", md: "40px", sm: "20px" },
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
                    fontSize: {
                      lg: "25px",
                      md: "21px",
                      sm: "18px",
                    },
                  }}
                >
                  {t(reason.text)}
                </Typography>
                <Box
                  sx={{
                    background: `url(${reason.img})`,
                    backgroundSize: "cover",
                    borderRadius: "50px",
                    display: { sm: "block", xs: "none" },
                    border: `5px outset ${Colors.Grey.ultraLight}`,
                    height: { lg: "500px", md: "350px", sm: "300px" },
                    width: { lg: "700px", md: "500px", sm: "400px" },
                    mb: "20px",
                  }}
                />
              </Box>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default Swing;
