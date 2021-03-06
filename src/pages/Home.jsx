import React from "react";

import { Box, Typography, Card, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import pages from "../services/pages";
import { topNav } from "../services/menu-top-nav";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";
import { useTranslation } from "react-i18next";
import { CommonStyles } from "../shared/styles";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Grid
        container
        spacing={1}
        sx={{
          alignItems: "center",
          justifyContent: "space-around",
          mb: "50px",
        }}
      >
        {topNav.map((page) => {
          return (
            <Grid
              key={page.id}
              item
              xs={10}
              md={3}
              sx={{
                mt: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to={page.to}
                sx={{
                  width: CommonStyles.AdaptiveButton.width,
                  height: {
                    lg: "65px",
                    md: "60px",
                    sm: "55px ",
                    xs: "50px",
                  },
                  borderRadius: "17px",
                  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${Colors.Grey.main})`,
                  border: `3px outset ${theme.palette.secondary}`,
                  "&:hover": {
                    boxShadow: `3px 3px  5px ${theme.palette.primary.light}`,
                    cursor: "pointer",
                    background: `linear-gradient(to bottom, ${theme.palette.primary.light}, ${Colors.Grey.dark})`,
                  },
                }}
              >
                <Typography
                  component="h3"
                  variant="link"
                  sx={{
                    textAlign: "center",
                    color: theme.palette.secondary.main,
                  }}
                >
                  {t(page.name)}
                </Typography>
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-around",
        }}
      >
        {pages.map((page) => (
          <Box
            key={page.id}
            sx={{
              width: {
                xl: "360px",
                lg: "320px",
                md: "275px",
                sm: "450px ",
                xs: "250px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                minHeight: { xs: "90px", lg: "none" },
              }}
            >
              <Typography
                variant="text"
                component="h3"
                color={page.color}
                textAlign="center"
                m="10px"
                mb="5px"
                minHeight="45px"
                sx={{
                  width: CommonStyles.AdaptiveButton.width,
                  height: CommonStyles.AdaptiveButton.height,
                }}
              >
                {t(page.name)}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Link to={page.to}>
                <Card
                  ///Importing ListItem to separate links into lines
                  sx={{
                    position: "relative",
                    borderRadius: "15px",
                    boxShadow: `1px 1px 7px ${page.color}`,
                    mb: { xs: "40px", md: "20px" },
                    height: {
                      xl: "360px",
                      lg: "320px",
                      md: "250px",
                      sm: "350px ",
                      xs: "250px",
                    },
                    width: {
                      xl: "360px",
                      lg: "320px",
                      md: "250px",
                      sm: "350px ",
                      xs: "250px",
                    },
                    background: `url(${page.background})`,
                    backgroundSize: "cover",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: `3px 3px 21px ${page.color}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -290,
                      right: -230,
                      width: 400,
                      height: 400,
                      borderRadius: 200,
                      background: "#FFFFFF",
                    }}
                  />
                  <img
                    src={page.img}
                    alt="Logo"
                    objectFit="scale-down"
                    style={{
                      position: "absolute",
                      bottom: 15,
                      right: 15,
                      width: 80,
                    }}
                  />
                </Card>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
