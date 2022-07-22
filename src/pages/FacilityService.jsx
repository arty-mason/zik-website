import React from "react";

import { Box, Grid, Paper, Typography } from "@mui/material";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

import facilities from "../services/facility-services";

const FacilityService = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      marginBottom="20px"
    >
      {facilities.map((facility) => {
        return (
          <Grid item md={10} lg={6} marginBottom="15px">
            <Paper
              key={facility.id}
              elevation={15}
              marginTop="50px"
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                p: "30px",
                justifyContent: "space-around",
                borderRadius: "15px",
                background: `linear-gradient(-130deg, ${Colors.Green.main}, black)`,
                "&:hover": {
                  background: `linear-gradient(130deg, ${Colors.Green.dark}, ${theme.palette.primary.dark})`,
                  boxShadow: `inset 0 0 5px 5px ${theme.palette.secondary.dark}`,
                },
              }}
            >
              <Box
                elevation={10}
                sx={{
                  m: "20px",
                  p: "20px",
                  height: "170px",
                  border: `3px outset ${Colors.Grey.ultraLight}`,
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
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
                  {facility.text}
                </Typography>
              </Box>
              <Box
                sx={{
                  background: `url(${facility.img})`,
                  backgroundSize: "cover",
                  height: "420px",
                  width: "420px",
                  p: "10px",
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
