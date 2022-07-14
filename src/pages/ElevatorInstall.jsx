import React from "react";

import { Box, Card, CardMedia, Container, Paper } from "@mui/material";
// Importing the additional components from MUI

import elevatorServices from "../services/elevator-services";
import TextField from "../shared/text-field";

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
        >
          Установка лифтов
        </TextField>
        <Box>
          <TextField
            variant="h5"
            component="p"
            sx={{
              my: "30px",
              color: theme.palette.primary.dark,
            }}
          >
            Наша компания-надежный партнер и помощник в вопросах монтажа,
            обслуживании, модернизации и автоматизации лифтов, подъемников,
            эскалаторов и травалаторов.
          </TextField>
          <TextField
            variant="h5"
            component="p"
            sx={{
              my: "20px",
              color: theme.palette.primary.dark,
            }}
          >
            Как и любое высокотехнологичное оборудование, подвержено износу,
            лифты и подъемные механизмы требуют регулярного технического
            обслуживания, а впоследствии – ремонта и модернизации. Мы поставляем
            запасные части и комплектующие изделия для лифтов и других подъемных
            механизмов различных заводов-производителей по доступным ценам.
          </TextField>
        </Box>
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
          <Card>
            <TextField
              variant="h6"
              component="p"
              sx={{
                my: "5px",
                color: theme.palette.primary.dark,
              }}
            >
              {elevatorServices.map((service) => {
                return (
                  <ul
                    type="none"
                    ///Removing the bullet points from the list items
                    key={service.id}
                  >
                    <li>{service.serviceName}</li>
                  </ul>
                );
              })}
            </TextField>
          </Card>
          <Card>
            <CardMedia />
          </Card>
        </Box>
        <TextField
          variant="h5"
          component="p"
          sx={{
            my: "20px",
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
      </Paper>
    </Container>
  );
};

export default ElevatorInstall;
