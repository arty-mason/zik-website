import React from "react";

import { Box, Card, CardMedia, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";

import TextField from "../shared/text-field";
import servicesTypes from "../services/construct-services";

import { theme } from "../config/color-config";

import crane from "../img/backgrounds/crane.jpeg";

const CustomBox = styled(Box)({
  my: "10px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  alignSelf: "center",
});

const ConstructAndInstall = () => {
  return (
    <Box mt="50px">
      <Container container justifyContent="center">
        <Paper
          elevation={15}
          sx={{
            padding: "10px",
            borderRadius: "20px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              my: "35px",
              mx: "20px",
              width: "45%",
            }}
          >
            <TextField
              variant="p"
              sx={{
                fontSize: "20px",
                color: theme.palette.primary.dark,
                my: "20px",
                textAlign: "center",
              }}
            >
              Вам надо провести строительно-монтажные работы, но вы не знаете
              где найти надежных и качественных специалистов?
              <br /> <br />
              Наша компания предоставляет комплексные решения в сфере
              проектирования, монтажа и технического обслуживания с лояльными
              ценами для клиента.
              <br /> <br />
              Преимущество сотрудничества с нами – выполнение любых общих
              строительных работ в установленные сроки, использование только
              качественных европейских материалов для строительства, выполнение
              работ только квалифицированными рабочими и специалистами.
              <br /> <br />
              Основная задача нашего строительного отдела – показать клиенту
              истинное качество выполнения работ за оптимальную цену.
              <br /> <br />
              Опыт работы наших специалистов не даст сомневаться в выборе нашей
              компании!
            </TextField>
          </Box>
          <Box
            sx={{
              my: "35px",
              mx: "20px",
              width: "45%",
            }}
          >
            <CardMedia
              component="img"
              src={crane}
              sx={{
                maxHeight: {
                  lg: "450px",
                },
              }}
            />
          </Box>
        </Paper>
      </Container>
      <TextField
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "40px",

          color: theme.palette.primary.dark,
        }}
      >
        Услуги, на которых мы специализируемся:
      </TextField>
      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          flexShrink: "1",
          padding: "10px",
        }}
      >
        {servicesTypes.map((service) => {
          return (
            <Card
              key={service.id}
              elevation={20}
              sx={{
                width: "400px",
                height: "400px",
                marginRight: "50px",
                my: "50px",
                px: "20px",
                py: "15px",
              }}
            >
              <CustomBox>
                <TextField
                  sx={{ color: theme.palette.primary.light, fontSize: "30px" }}
                >
                  {service.serviceName}
                </TextField>
              </CustomBox>
              <CustomBox>
                <TextField sx={{ color: theme.palette.primary.dark }}>
                  {service.serviceDescription}
                </TextField>
              </CustomBox>
              <CustomBox>
                <CardMedia
                  component="img"
                  src={service.img}
                  sx={{
                    width: "300px",
                    height: "200px",
                    objectFit: "scale-down",
                  }}
                />
              </CustomBox>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default ConstructAndInstall;
