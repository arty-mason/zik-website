import React from "react";

import { Box, Grid, Paper, Typography } from "@mui/material";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

import facilities from "../services/facility-services";
import { useTranslation } from "react-i18next";
import facilityBackground from "../img/facilityPage/mainBackground/facilityBackground.png";

const FacilityService = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        flexdirection: { sx: "row", md: "column" },
        alignItems: "center",
        mb: "20px",
        background: `url(${facilityBackground})`,
        backgroundSize: "cover",
      }}
    >
      {facilities.map((facility) => {
        return (
          <Grid item lg={3} md={6} sm={6}>
            <Paper
              key={facility.id}
              elevation={15}
              marginTop="50px"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: "20px",
                mx: "10px",
                justifyContent: "space-around",
                borderRadius: "15px",
                height: { lg: "650px" },
                background: `linear-gradient(-130deg, ${Colors.Green.main}, black)`,
                "&:hover": {
                  background: `linear-gradient(-130deg, ${Colors.Green.dark}, ${theme.palette.primary.main})`,
                  boxShadow: `inset 0 0 5px 5px ${theme.palette.secondary.main}`,
                },
              }}
            >
              <Box
                elevation={10}
                sx={{
                  m: "5px",
                  py: "10px",
                  px: "5px",
                  border: `3px outset ${Colors.Grey.ultraLight}`,
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  minHeight: "270px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {t(facility.text)}
                </Typography>
              </Box>
              <Box
                sx={{
                  background: `url(${facility.img})`,
                  backgroundSize: "cover",
                  borderRadius: "20px",
                  height: {
                    xl: "300px",
                    lg: "230px",
                    sm: "250px",
                    xs: "200px",
                  },
                  width: { xl: "300px", lg: "230px", sm: "250px", xs: "200px" },
                  p: "10px",
                  mt: "20px",
                }}
              />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FacilityService;
