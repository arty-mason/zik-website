import React from "react";

import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";

import TextField from "../shared/text-field";
import servicesTypes from "../services/construct-services";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

import constructionAdvantage from "../services/construction-content";
import { useTranslation } from "react-i18next";

import pageBackground from "../img/constructionPage/mainBackground/pageBackground.png";

const ConstructAndInstall = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={
        {
          /*    background: `url(${pageBackground})`,
        backgroundSize: "cover", */
        }
      }
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={15}
          sx={{
            padding: "10px",
            borderRadius: "25px",
            display: "flex",
            maxWidth: {
              xl: "1200px",
              lg: "1000px",
              md: "750px",
              sm: "470px",
              xs: "240px",
            },
            borderBottom: `10px outset ${Colors.Red.light}`,
            borderRight: `10px inset ${theme.palette.secondary.main}`,
          }}
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                textAlign: "center",
                my: "20px",
                mx: "20px",
                fontSize: {
                  xl: "30px",
                  lg: "37px",
                  md: "24px",
                  sm: "21px",
                  xs: "18px",
                },
                background: `linear-gradient(30deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
              }}
            >
              {t("construction_page_headline")}
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: {
                  xl: "27px",
                  lg: "24px",
                  md: "21px",
                  sm: "18px",
                  xs: "15px",
                },
                m: "20px",
                textAlign: "center",
                background: `linear-gradient(30deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
              }}
            >
              {t("construction_page_paragrapgh_one")}
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xl: "30px",
                  lg: "37px",
                  md: "24px",
                  sm: "21px",
                  xs: "18px",
                },
                my: "15px",
                textAlign: "center",
                background: `linear-gradient(30deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
              }}
            >
              {t("construction_page_reason_title")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              {constructionAdvantage.map((paragraph) => {
                const IconComponent = paragraph.advantageIcon;
                return (
                  <Card
                    key={paragraph.id}
                    elevation={10}
                    sx={{
                      width: {
                        xl: "300px",
                        lg: "250px",
                        md: "200px",
                        sm: "300px",
                        xs: "200px",
                      },
                      height: {
                        md: "300px",
                        sm: "220px",
                        xs: "200px",
                      },

                      my: "10px",
                      borderRadius: "20px",
                      background: `linear-gradient(to bottom, ${theme.palette.secondary.main}, ${Colors.Red.main})`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&:hover": {
                        animation: `pulse 2s linear infinite`,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        my: "20px",
                        px: "10px",
                        fontSize: {
                          xl: "24px",
                          lg: "21px",
                          md: "18px",
                          sm: "15px",
                          xs: "12px",
                        },
                        textAlign: "center",
                      }}
                    >
                      {t(paragraph.advantageText)}
                    </Typography>
                    <IconComponent
                      sx={{
                        height: "100px",
                        width: "100px",
                        color: "white",
                      }}
                    />
                  </Card>
                );
              })}
            </Box>
            <Typography
              component="h1"
              sx={{
                background: `linear-gradient(30deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
                my: "30px",
                mx: "5%",
                textAlign: "center",
                fontSize: {
                  xl: "27px",
                  lg: "24px",
                  md: "21px",
                  sm: "18px",
                  xs: "15px",
                },
              }}
            >
              {t("construction_page_paragrapgh_two")}
              <br /> <br />
              {t("construction_page_paragrapgh_three")}
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Typography
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "40px",
          color: Colors.Red.main,
          fontSize: {
            xl: "50px",
            lg: "45px",
            md: "40px",
            sm: "35px",
            xs: "23px",
          },
        }}
      >
        {t("construction_page_services_title")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          mx: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {servicesTypes.map((service) => {
          return (
            <Card
              key={service.id}
              elevation={20}
              sx={{
                background: `linear-gradient(180deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                width: { lg: "250px", md: "200px", sm: "400px", xs: "270px" },
                height: { lg: "500px", md: "400px", sm: "400px", xs: "270px" },
                borderRadius: "20px",
                boxShadow: "5px",
                my: "30px",
                px: "30px",
                py: "35px",
                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <TextField
                sx={{
                  color: "white",
                  fontSize: {
                    xl: "25px",
                    lg: "23px",
                    md: "18px",
                    sm: "25px",
                    xs: "16px",
                  },
                  minHeight: "50px",
                }}
              >
                {t(service.serviceName)}
              </TextField>

              <Typography
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontSize: {
                    xl: "16px",
                    lg: "16px",
                    md: "13px",
                    sm: "16px",
                    xs: "12px",
                  },
                }}
              >
                {t(service.serviceDescription)}
              </Typography>
              <CardMedia
                component="img"
                src={service.img}
                sx={{
                  width: {
                    lg: "250px",
                    md: "220px",
                    sm: "300px",
                    xs: "220px",
                  },
                  height: {
                    lg: "200px",
                    md: "150px",
                    sm: "200px",
                    xs: "125px",
                  },
                  objectFit: "cover",
                }}
              />
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default ConstructAndInstall;
