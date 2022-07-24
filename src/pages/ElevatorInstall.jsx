import React from "react";

import { Box, Card, Container, Grid, Paper, Typography } from "@mui/material";
// Importing the additional components from MUI

import { theme } from "../config/color-config";

import ElevatorGallery from "../components/ElevatorCarousel";
import elevatorServices from "../services/elevator-services";
import { useTranslation } from "react-i18next";

const ElevatorInstall = () => {
  const { t } = useTranslation();
  return (
    <Container
      container
      justifyContent="center"
      sx={{
        my: "50px",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          borderRadius: "25px",
        }}
      >
        <ElevatorGallery />
      </Paper>
      <Typography
        variant="h3"
        component="h4"
        sx={{
          minHeight: "80px",
          my: "30px",
          color: theme.palette.secondary.dark,
          textAlign: "center",
        }}
      >
        {t("elevators_page_services_grid_title")}
      </Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="space-around"
      >
        {elevatorServices.map((service) => {
          return (
            <Grid key={service.id} item lg={4} md={6} sm={8} xs={10}>
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
    </Container>
  );
};

export default ElevatorInstall;
