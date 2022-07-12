import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
import CustomText from "../shared/custom-text";

const Experience = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        marginTop: "5em",
        width: "98vw",
        border: "1px solid black",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginBottom: "10px",
          color: "#005b84",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        Какой опыт мы имеем?
      </Typography>
      <Card
        sx={{
          padding: "30px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Paper
            elevation={13}
            sx={{
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid black",
              backgroundColor: "#005b84",
            }}
          >
            <CustomText
              variant="p"
              component="p"
              width="600px"
              height="270px"
              fontFamily="Calibri"
              textAlign="center"
              sx={{
                px: "20px",
                paddingBottom: "15px",
                fontSize: "20px",
              }}
            >
              В течение последних пяти лет наша компания: <br /> <br />
              обслужила более 1000 лифтов на территории Украины; <br /> <br />
              62 дома мы обслуживаем как управляющая компания; <br /> <br />
              проданла и смонтировала больше 100 лифтов в новостройках и около и
              выполнила около 325 контрактов по ремонту лифтового оборудования;
              <br /> <br />
              выполнила более 500 договоров с учреждениями, которые
              финансируются государственным бюджетом Украины.
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
