import React from "react";
/* import "animate.css"; */

import { Box, CardMedia, Container, Paper, Typography } from "@mui/material";

import aboutUs from "../img/aboutUs/aboutUs.jpg";

import { theme } from "../config/color-config";

import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const CommercialText = styled(Typography)({
  marginBottom: "20px",
});

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Container>
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
            width: "70%",
            background: "#eceff1",
            border: `3px outset ${theme.palette.primary.main}`,
            "&:hover": {
              background: `linear-gradient(to right,  ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
              color: "white",
              border: "none",
            },
          }}
        >
          <CommercialText
            variant="h4"
            component="h1"
            textAlign="center"
            sx={{ color: theme.palette.secondary.dark }}
          >
            {t("about_us_top_text")}
          </CommercialText>
          <CommercialText
            variant="h6"
            component="p"
            textAlign="center"
            sx={{ color: theme.palette.secondary.dark }}
          >
            {t("about_us_service_one")} <br />
            {t("about_us_service_two")} <br />
            {t("about_us_service_three")} <br />
          </CommercialText>
          <CardMedia
            component="img"
            src={aboutUs}
            sx={{
              borderRadius: 5,
              objectFit: "scale-down",
              width: "80%",
            }}
          />
          <CommercialText
            variant="h6"
            component="p"
            textAlign="justify"
            sx={{
              my: "20px",
              mx: "95px",
              color: theme.palette.secondary.dark,
            }}
          >
            {t("about_us_last_paragraph")}
          </CommercialText>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutUs;
