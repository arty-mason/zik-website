import React from "react";

import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";

import { theme } from "../config/color-config";

import ElevatorGallery from "../components/ElevatorCarousel";
import elevatorServices from "../services/elevator-services";
import { elevatorDocs } from "../services/catalogues-cerificates";

import { useTranslation } from "react-i18next";
import elevatorsBackground from "../img/elevatorPage/mainBackground/elevatorsBackground.png";

const ElevatorInstall = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        my: "-50px",
        py: "50px",
        background: `url(${elevatorsBackground})`,
        backgroundSize: "cover",
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

      <Paper
        id="main-column"
        elevation={12}
        sx={{
          my: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          background: `linear-gradient(to bottom, ${theme.palette.primary.dark}, lightgray)`,
          borderRadius: "20px",
          width: {
            xl: "1400px",
            lg: "1000px",
            md: "750px",
            sm: "500px",
            xs: "300px",
          },
          height: {
            xl: "470px",
            lg: "650px",
            md: "875px",
            sm: "1500px",
            xs: "1200px",
          },
        }}
      >
        <Typography
          id="heading"
          sx={{
            pt: "20px",
            px: "50px",
            pb: " 5px",
            fontSize: {
              xl: "32px",
              lg: "28px",
              md: "25px",
              sm: "22px",
              xs: "17px",
            },
            textAlign: "center",
            color: "white",
          }}
        >
          {t("elevators_page_catalogue_text")}
        </Typography>
        <Grid
          container
          id="flex-row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {elevatorDocs.map((doc) => {
            return (
              <Grid
                item
                xl={2}
                lg={3}
                md={4}
                xs={6}
                key={doc.id}
                id="flex-column"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: {
                    xl: "330px",
                    lg: "300px",
                    md: "270px",
                    sm: "250px",
                    xs: "220px",
                  },
                  mx: {
                    xl: "20px",
                    lg: "17px",
                    md: "14px",
                    sm: "11px",
                    xs: "7px",
                  },
                }}
              >
                <Box
                  sx={{
                    background: `url(${doc.img})`,
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    mb: "10px",
                    height: {
                      xl: "250px",
                      lg: "220px",
                      md: "200px",
                      sm: "170px",
                      xs: "130px",
                    },
                    width: {
                      xl: "250px",
                      lg: "220px",
                      md: "200px",
                      sm: "170px",
                      xs: "130px",
                    },
                  }}
                />

                <Button
                  variant="contained"
                  onClick={() => {
                    window.open(process.env.PUBLIC_URL + doc.docPath);
                  }}
                  sx={{
                    height: {
                      xl: "75px",
                      lg: "50px",
                      md: "35px",
                      sm: "45px",
                      xs: "50px",
                    },
                    borderRadius: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "white",
                      fontSize: {
                        xl: "20px",
                        lg: "18px",
                        md: "16px",
                        sm: "14px",
                        xs: "12px",
                      },
                    }}
                  >
                    {t(doc.buttonText)}
                  </Typography>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ElevatorInstall;
