import React from "react";

import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";

import CustomText from "../shared/custom-text";
import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

const Experience = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        marginTop: "70px",
        width: "95vw",
        border: `2px solid ${Colors.Grey.dark}`,
        // backgroundColor: Colors.Grey.ultraLight,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginBottom: "10px",
          color: theme.palette.secondary.dark,
          textAlign: "center",
          marginTop: "15px",
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
          // backgroundColor: Colors.Grey.ultraLight,
        }}
      >
        <CardContent>
          <Paper
            elevation={13}
            sx={{
              padding: "10px",
              borderRadius: "10px",
              border: `2px solid ${Colors.Grey.dark}`,
              // backgroundColor: Colors.Grey.ultraLight,
            }}
          >
            <CustomText
              variant="p"
              component="p"
              width="550px"
              height="270px"
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
                <li>
                  продолжает обслуживать 62 дома как управляющая компания;
                </li>
                <li>
                  продала и смонтировала больше 100 лифтов в новостройках и
                  выполнила около 325 контрактов по ремонту лифтового
                  оборудования;
                </li>
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
            border: "1px solid black",
          }}
        />
      </Card>
    </Paper>
  );
};

export default Experience;
