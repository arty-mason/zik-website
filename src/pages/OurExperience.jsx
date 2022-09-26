import React from "react";

import { Box, Container, Paper, Typography } from "@mui/material";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";
import { achievements } from "../services/experience-achievements";
import ExperienceGallery from "../components/ImageGallery";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          px: "20px",
          color: theme.palette.primary.dark,
          textAlign: "center",
          mb: "40px",
          background: `linear-gradient(30deg, ${theme.palette.primary.dark}, ${Colors.Grey.light})`,
          textFillColor: `transparent`,
          backgroundClip: `text`,
        }}
      >
        <b>{t("our_experience_title")}</b>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: { md: "nowrap", xs: "wrap" },
        }}
      >
        {achievements.map((achievement) => {
          const IconComponent = achievement.icon;
          return (
            <Paper
              key={achievement.id}
              elevation={20}
              sx={{
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: { lg: "350px", md: "300px", sm: "210px", xs: "170px" },
                width: { lg: "250px", md: "200px", sm: "320px", xs: "250px" },
                mx: "5px",
                mb: "30px",
                py: "20px",
                background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${Colors.Grey.light})`,
                border: `5px solid ${Colors.Grey.light}`,
                "&:hover": {
                  boxShadow: `3px 3px 5px 5px ${theme.palette.primary.light}`,
                  cursor: "pointer",
                  background: `linear-gradient(to bottom, ${theme.palette.primary.light}, ${Colors.Grey.dark})`,
                },
              }}
            >
              <Typography
                sx={{
                  px: "10px",
                  py: "5px",
                  minHeight: {
                    xl: "200px",
                    lg: "10px",
                    md: "15px",
                    sm: "20px",
                    xs: "10px",
                  },
                  fontSize: { lg: "16px", sm: "14px", xs: "11px" },
                  color: Colors.Grey.ultraLight,
                  textAlign: "center",
                  mb: "20px",
                }}
              >
                {t(achievement.text)}
              </Typography>
              <IconComponent
                sx={{
                  width: { lg: "120px", md: "90px", sm: "100px", xs: "70px" },
                  height: { lg: "120px", md: "90px", sm: "100px", xs: "70px" },
                  color: Colors.Grey.ultraLight,
                  pb: "10px",
                }}
              />
            </Paper>
          );
        })}
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: { lg: "800px", md: "700px", sm: "500px", xs: "250px" },
        }}
      >
        <ExperienceGallery />
      </Container>
    </Box>
  );
};

export default Experience;
