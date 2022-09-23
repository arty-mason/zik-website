import React from "react";
/* import "animate.css"; */

import { Box, CardMedia, Paper, Typography } from "@mui/material";

import aboutUs from "../img/aboutUs/aboutUs.jpg";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const CommercialText = styled(Typography)({
  marginBottom: "20px",
  color: theme.palette.secondary.main,
  textShadow: "2px 2px 2px black",
  textAlign: "center",
});

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginBottom="20px"
    >
      <Paper
        elevation={15}
        sx={{
          borderRadius: 15,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          my: "20px",
          p: "30px",
          width: {
            xl: "1050px",
            lg: "900px",
            md: "750px",
            sm: "500px",
            xs: "275px",
          },
          background: `linear-gradient(to right,  ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
          border: `3px outset ${theme.palette.primary.main}`,
        }}
      >
        <CommercialText
          component="h1"
          sx={{
            fontSize: { lg: "30px", md: "25px", sm: "20px", xs: "15px" },
          }}
        >
          {t("about_us_top_text")}
        </CommercialText>
        <CommercialText
          component="p"
          sx={{
            fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
          }}
        >
          {t("about_us_service_one")} <br />
          {t("about_us_service_two")} <br />
          {t("about_us_service_three")} <br />
        </CommercialText>
        <CardMedia
          component="img"
          src={aboutUs}
          sx={{
            objectFit: "scale-down",
            width: { lg: "600px", md: "400px", sm: "300px", xs: "250px" },
            borderRadius: 5,
            border: `2px solid ${Colors.Grey.ultraLight}`,
          }}
        />
        <CommercialText
          variant="h6"
          component="p"
          sx={{
            fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "12px" },
            my: "20px",
            mx: "5px",
          }}
        >
          {t("about_us_last_paragraph")}
        </CommercialText>
      </Paper>
    </Box>
  );
};

export default AboutUs;
