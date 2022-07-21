import React from "react";

import {
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
// Importing the additional components from MUI

import { theme } from "../config/color-config";

import ElevatorGallery from "../components/ElevatorCarousel";
import elevatorServices from "../services/elevator-services";

const ElevatorInstall = () => {
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
        Мы предоставляем следующие виды услуг:
      </Typography>
      {/*   <Box
        sx={{
          px: "50px",
          py: "30px",
            display: "flex",
           flexDirection: "column",
          alignItems: "center",
          background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
          borderRadius: "22px",
        }}
      ></Box> */}
      <Grid container spacing={3}>
        {elevatorServices.map((service) => {
          return (
            <Grid key={service.id} item xs={4}>
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
                  {service.name}
                </Typography>
                <CardMedia component="img" src={service.img} />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ElevatorInstall;
