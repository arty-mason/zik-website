import React from "react";

import {
  Box,
  Card,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
// Importing the additional components from MUI

import elevatorServices from "../services/elevator-services";
import TextField from "../shared/text-field";
import { Colors } from "../config/design-config";
import { theme } from "../config/color-config";

const ElevatorInstall = () => {
  return (
    <Container container justifyContent="center">
      <Paper>
      <TextField
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "20px",
          color: theme.palette.primary.main,
        }}
      >Установка лифтов</TextField>
        <Box>
          <Typography>
            Наша компания-надежный партнер и помощник в вопросах монтажа,
            обслуживании, модернизации и автоматизации лифтов, подъемников,
            эскалаторов и травалаторов.
          </Typography>
          <Typography>
            Как и любое высокотехнологичное оборудование, подвержено износу,
            лифты и подъемные механизмы требуют регулярного технического
            обслуживания, а впоследствии – ремонта и модернизации. Мы поставляем
            запасные части и комплектующие изделия для лифтов и других подъемных
            механизмов различных заводов-производителей по доступным ценам.
          </Typography>
        </Box>
        <Box>
          <Typography>Мы предоставляем следующие виды услуг</Typography>
          <Card>
            <Typography>
              {elevatorServices.map((service) => {
                return (
                  <ul key={service.id}>
                    <li>{service.serviceName}</li>
                  </ul>
                );
              })}
            </Typography>
          </Card>
          <Card>
            <CardMedia />
          </Card>
        </Box>
        <Typography>
          Наша команда дисциплинирована и знает, что такое сроки. Мы
          предоставляем круглосуточное обслуживание, доступные цены,
          использование только сертифицированных инструментов и сотрудничество с
          европейскими производителями лифтового оборудования. Наша
          компания-залог качества и безопасности.
        </Typography>
      </Paper>
    </Container>
  );
};

export default ElevatorInstall;
