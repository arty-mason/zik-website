import React from "react";

import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";

import CustomText from "../shared/custom-text";
import { theme } from "../config/color-config";

const Experience = () => {
  return (
    <Paper
      elevation={20}
      sx={{
        borderRadius: "20px",
        // ! Not working properly yet
        marginTop: "80px",
        width: "95vw",
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
          image="http://www.hoistway.com.ua/wp-content/uploads/2020/02/bak%C4%B1m-onakasansor.com_.png"
          alt="Lift service"
          sx={{
            height: "350px",
            width: "350px",
            objectFit: "scale-down",
            borderRadius: "15px",
          }}
        />
      </Card>
    </Paper>
  );
};

export default Experience;
