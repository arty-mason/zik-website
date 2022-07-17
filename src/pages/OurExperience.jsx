import React from "react";

import { Box, CardContent, CardMedia, Paper, Typography } from "@mui/material";

import { theme } from "../config/color-config";

import buildingsBackground from "../img/backgrounds/buildingsBackground.jpg";
import styled from "@emotion/styled";

const ExperienceText = styled(Typography)({});

const Experience = () => {
  return (
    <Box
      sx={{
        my: "20px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Paper
          elevation={20}
          sx={{
            padding: "10px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            sx={{
              px: "20px",
              color: theme.palette.primary.dark,
              textAlign: "center",
            }}
          >
            <b> В течение последних пяти лет наша компания:</b>
          </Typography>
          <Typography
            variant="p"
            component="p"
            width="550px"
            height="350px"
            sx={{
              px: "10px",
              fontSize: "20px",
              color: theme.palette.primary.main,
            }}
          >
            - обслужила более 1000 лифтов на территории Украины;
            <br /> <br />
            - продолжает обслуживать 62 дома как управляющая компания;
            <br /> <br />
            - продала и смонтировала больше 100 лифтов в новостройках и
            выполнила около 325 контрактов по ремонту лифтового оборудования;
            <br /> <br />- выполнила более 500 договоров с учреждениями, которые
            финансируются государственным бюджетом Украины.
          </Typography>
        </Paper>
      </CardContent>
      <CardMedia
        component="img"
        image={buildingsBackground}
        alt="Lift service"
        sx={{
          height: "400px",
          width: "600px",
          objectFit: "scale-down",
          borderRadius: "15px",
        }}
      />
    </Box>
  );
};

export default Experience;
