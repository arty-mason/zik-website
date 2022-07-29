import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

import facilities from "../services/facility-services";
import { useTranslation } from "react-i18next";

const FacilityService = () => {
  const { t } = useTranslation();
  return (
    <Box
      id="test123"
      sx={{
        display: "flex",
        justifycontent: "space-between",
        /*  flexdirection: { sx: "row", md: "column" }, */
        alignItems: "center",
        /* ml: "15px", */
        mb: "20px",
      }}
    >
      {facilities.map((facility) => {
        return (
          <Paper
            key={facility.id}
            elevation={15}
            marginTop="50px"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "30px",
              mx: "10px",
              width: "320px",
              justifyContent: "space-around",
              borderRadius: "15px",
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
                minHeight: "260px",
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
                height: "280px",
                width: "280px",
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
