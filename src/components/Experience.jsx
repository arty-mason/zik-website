import React from "react";

import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";

import { theme } from "../config/color-config";

import CustomText from "../shared/custom-text";

import buildingsBackground from "../img/backgrounds/buildingsBackground.jpg"

const Experience = () => {
  return (
    <Paper
      elevation={20}
      sx={{
        borderRadius: "20px",
        // ! Not working properly yet
        width: "95vw",
        my: "70px",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          paddingBottom: "5px",
          color: theme.palette.secondary.dark,
          textAlign: "center",
          marginTop: "20px",
          paddingTop: "20px",
        }}
      >
        Какой опыт мы имеем?
      </Typography>
      <Card
        sx={{
          py: "30px",
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
              borderRadius: "10px",
            }}
          >
            <CustomText
              variant="p"
              component="p"
              width="550px"
              height="350px"
              fontFamily="Calibri"
              sx={{
                px: "20px",
                paddingBottom: "15px",
                fontSize: "20px",
                color: theme.palette.primary.dark,
              }}
            >
              В течение последних пяти лет наша компания: <br />
              <ul>
                <li>обслужила более 1000 лифтов на территории Украины;</li>
                <br />
                <li>
                  продолжает обслуживать 62 дома как управляющая компания;
                </li>
                <br />
                <li>
                  продала и смонтировала больше 100 лифтов в новостройках и
                  выполнила около 325 контрактов по ремонту лифтового
                  оборудования;
                </li>
                <br />
                <li>
                  выполнила более 500 договоров с учреждениями, которые
                  финансируются государственным бюджетом Украины.
                </li>
              </ul>
            </CustomText>
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
      </Card>
    </Paper>
  );
};

export default Experience;
