import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const Experience = () => {
  return (
    <Box marginTop={3}>
      <Typography variant="h4" component="h1" textAlign="center">
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
            }}
          >
            <Typography
              variant="body2"
              width="300px"
              sx={{
                margin: "20px",
              }}
            >
              В течение последних пяти лет наша компания обслуживает более 1000
              лифтов на территории Украины, 62 дома мы обслуживаем, как
              управляющая компания, больше 100 проданных и смонтированных лифтов
              в новостройках и около 325 выполненных договоров по ремонту
              лифтового оборудования, более 500 выполненных договоров с
              учреждениями, которые финансируются государственным бюджетом
              Украины.
            </Typography>
          </Paper>
        </CardContent>
        <CardMedia
          component="img"
          image="http://www.hoistway.com.ua/wp-content/uploads/2020/02/bak%C4%B1m-onakasansor.com_.png"
          alt="Lift service"
          sx={{
            height: "300px",
            width: "300px",
            objectFit: "scale-down",
          }}
        />
      </Card>
    </Box>
  );
};

export default Experience;
