import React from "react";

import { Box, Card, CardMedia, Container, Paper } from "@mui/material";
// Importing the additional components from MUI

import ElevatorCarousel from "../components/ElevatorCarousel";

import TextField from "../shared/text-field";

import { theme } from "../config/color-config";

import elevatorWorks from "../img/elevators/elevatorWorks.png";

const ElevatorInstall = () => {
  return (
    <Container
      container
      justifyContent="center"
      sx={{
        my: "50px",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          borderRadius: "25px",
          pb: "20px",
        }}
      >
        <TextField
          variant="h5"
          component="p"
          sx={{
            my: "30px",
            p: "40px",
            color: theme.palette.primary.dark,
          }}
        >
          Наша компания-надежный партнер и помощник в вопросах монтажа,
          обслуживании, модернизации и автоматизации лифтов, подъемников,
          эскалаторов и травалаторов.
          <br /> <br />
          Как и любое высокотехнологичное оборудование, подвержено износу, лифты
          и подъемные механизмы требуют регулярного технического обслуживания, а
          впоследствии – ремонта и модернизации. Мы поставляем запасные части и
          комплектующие изделия для лифтов и других подъемных механизмов
          различных заводов-производителей по доступным ценам.
        </TextField>

        <CardMedia
          component="img"
          src={elevatorWorks}
          sx={{
            maxHeight: "400px",
            objectFit: "scale-down",
          }}
        />
      </Paper>
      <Box>
        <TextField
          variant="h4"
          component="h2"
          sx={{
            my: "20px",
            color: theme.palette.primary.dark,
          }}
        >
          Мы предоставляем следующие виды услуг
        </TextField>
        <Card
          elevation={10}
          sx={{
            borderRadius: "15px",
          }}
        >
          <ElevatorCarousel />
        </Card>

        <TextField
          variant="h5"
          component="p"
          sx={{
            my: "20px",
            p: "40px",
            color: theme.palette.primary.dark,
          }}
        >
          Наша команда дисциплинирована и знает, что такое сроки.
          <br />
          <br />
          Мы предоставляем круглосуточное обслуживание, доступные цены,
          использование только сертифицированных инструментов и сотрудничество с
          европейскими производителями лифтового оборудования. <br />
          <br />
          Наша компания - залог качества и безопасности.
        </TextField>
      </Box>
    </Container>
  );
};

export default ElevatorInstall;
