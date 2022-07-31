import React from "react";

import { Box, Card, Grid, Paper, Typography } from "@mui/material";
// Importing the additional components from MUI

import { theme } from "../config/color-config";

import ElevatorGallery from "../components/ElevatorCarousel";
import elevatorServices from "../services/elevator-services";
import { useTranslation } from "react-i18next";

const ElevatorInstall = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        my: "50px",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          borderRadius: "25px",
          py: "30px",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, white )`,
        }}
      >
        <ElevatorGallery />
      </Paper>
      <Typography
        component="h4"
        sx={{
          minHeight: "80px",
          my: "30px",
          color: theme.palette.secondary.dark,
          textAlign: "center",
          fontSize: {
            xl: "50px",
            lg: "45px",
            md: "40px",
            sm: "35px",
            xs: "30px",
          },
        }}
      >
        {t("elevators_page_services_grid_title")}
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: { lg: "1200px", md: "800px", sm: "600px", xs: "300px" },
        }}
      >
        {elevatorServices.map((service) => {
          return (
            <Grid key={service.id} item lg={4} md={6} sm={8}>
              <Card
                sx={{
                  p: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  background: `linear-gradient(160deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
                  borderRadius: "22px",
                  minHeight: "400px",
                  minWidth: "310px",
                  "&:hover": {
                    boxShadow: `inset 0 0 7px 7px ${theme.palette.secondary.main}`,
                  },
                }}
              >
                <Typography
                  color="white"
                  fontSize="19px"
                  textAlign="center"
                  sx={{
                    px: "2px",
                    minHeight: "60px",
                  }}
                >
                  {t(service.name)}
                </Typography>
                <Box
                  sx={{
                    background: `url(${service.img})`,
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    height: "270px",
                    width: "300px",
                  }}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ElevatorInstall;
