import React from "react";

import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";
import { achievements } from "../services/experience-achievements";
import ExperienceGallery from "../components/ImageGallery";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Box
        sx={{
          my: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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
        <Grid container spacing={5}>
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Grid key={achievement.id} item md={3} xs={6}>
                <Paper
                  elevation={20}
                  sx={{
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    height: "350px",
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
                      px: "20px",
                      py: "30px",
                      fontSize: "16px",
                      color: Colors.Grey.ultraLight,
                      textAlign: "center",
                      minHeight: "150px",
                      mb: "20px",
                    }}
                  >
                    {t(achievement.text)}
                  </Typography>
                  <IconComponent
                    sx={{
                      width: "120px",
                      height: "120px",
                      color: Colors.Grey.ultraLight,
                      pb: "10px",
                    }}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <ExperienceGallery />
      </Box>
    </Container>
  );
};

export default Experience;
