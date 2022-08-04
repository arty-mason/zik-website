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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexdirection: { lg: "column" },
        flexWrap: { lg: "noWrap", xs: "wrap" },
        mb: "20px",
        background: `url(${facilityBackground})`,
        backgroundSize: "cover",
      }}
    >
      {facilities.map((facility) => {
        return (
          <Paper
            key={facility.id}
            elevation={15}
            marginTop="50px"
            sx={{
              my: { lg: "none", xs: "20px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "20px",
              mx: "10px",
              justifyContent: "space-around",
              borderRadius: "15px",
              height: { xl: "600px", lg: "500px", md: "400px", xs: "400px" },
              width: {
                xl: "300px",
                lg: "250px",
                md: "340px",
                xs: "250px",
              },
              background: `linear-gradient(-130deg, ${Colors.Green.main}, black)`,
              "&:hover": {
                background: `linear-gradient(-130deg, ${Colors.Green.dark}, ${theme.palette.primary.main})`,
                boxShadow: `inset 0 0 5px 5px ${theme.palette.secondary.dark}`,
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
                minHeight: {
                  xl: "220px",
                  lg: "180px",
                  md: "150px",
                  sm: "130px",
                  xs: "170px",
                },
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontSize: {
                    xl: "20px",
                    lg: "16px",
                    md: "18px",
                    xs: "15px",
                  },
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
                  lg: "260px",
                  md: "230px",
                  sm: "170px",
                  xs: "150px",
                },
                width: {
                  xl: "300px",
                  lg: "220px",
                  md: "300px",
                  xs: "220px",
                },
                p: "10px",
                mt: "20px",
              }}
            />
          </Paper>
        );
      })}
    </Box>
  );
};

export default FacilityService;
