import React from "react";

import {
  Box,
  Card,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import TextField from "../shared/text-field";
import servicesTypes from "../services/construct-services";

import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

import constructionAdvantage from "../services/construction-content";

const ConstructAndInstall = () => {
  return (
    <Box>
      <Container container justifyContent="center">
        <Paper
          elevation={15}
          sx={{
            padding: "10px",
            borderRadius: "25px",
            display: "flex",
            borderBottom: `10px outset ${Colors.Red.light}`,
            borderRight: `10px inset ${theme.palette.secondary.main}`,
          }}
        >
          <Box
            sx={{
              my: "35px",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                my: "20px",
                textAlign: "center",
                mx: "5%",
                background: `linear-gradient(30deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
              }}
            >
              Вам надо провести строительно-монтажные работы, но вы не знаете
              где найти надежных и качественных специалистов?
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                my: "20px",
                mx: "5%",
                textAlign: "center",
                background: `linear-gradient(30deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
              }}
            >
              Наша компания предоставляет комплексные решения в сфере
              проектирования, монтажа и технического обслуживания с лояльными
              ценами для клиента.
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                mt: "20px",
                mb: "40px",
                textAlign: "center",
                background: `linear-gradient(30deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                textFillColor: `transparent`,
                backgroundClip: `text`,
              }}
            >
              Преимущество сотрудничества с нами:
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {constructionAdvantage.map((paragraph) => {
                const IconComponent = paragraph.advantageIcon;
                return (
                  <Box
                    key={paragraph.id}
                    sx={{
                      width: "25%",
                      mx: "5px",
                    }}
                  >
                    <Card
                      elevation={10}
                      sx={{
                        height: "300px",
                        borderRadius: "20px",
                        background: `linear-gradient(to bottom, ${theme.palette.secondary.main}, ${Colors.Red.main})`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          animation: `pulse 2s linear infinite`,
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          my: "20px",
                          fontSize: "18px",
                          textAlign: "center",
                        }}
                      >
                        {paragraph.advantageText}
                      </Typography>
                      <IconComponent
                        sx={{
                          height: "100px",
                          width: "100px",
                          color: "white",
                        }}
                      />
                    </Card>
                  </Box>
                );
              })}
            </Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                color: "white",
                my: "30px",
                mx: "5%",
                textAlign: "center",
              }}
            >
              Основная задача нашего строительного отдела – показать клиенту
              истинное качество выполнения работ за оптимальную цену.
              <br /> <br />
              Опыт работы наших специалистов не даст сомневаться в выборе нашей
              компании!
            </Typography>
          </Box>
        </Paper>
      </Container>
      <TextField
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "40px",
          color: Colors.Red.main,
        }}
      >
        Услуги, на которых мы специализируемся:
      </TextField>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        {servicesTypes.map((service) => {
          return (
            <Card
              key={service.id}
              elevation={20}
              sx={{
                background: `linear-gradient(180deg,  ${Colors.Red.dark}, ${theme.palette.secondary.dark})`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                height: "500px",
                marginRight: "50px",
                borderRadius: "20px",
                boxShadow: "5px",
                my: "50px",
                px: "20px",
                py: "15px",
                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <TextField
                sx={{
                  color: "white",
                  fontSize: "30px",
                  minHeight: "50px",
                }}
              >
                {service.serviceName}
              </TextField>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  minHeight: "175px",
                  my: "1%",
                }}
              >
                <TextField
                  sx={{
                    color: "white",
                  }}
                >
                  {service.serviceDescription}
                </TextField>
              </Box>
              <CardMedia
                component="img"
                src={service.img}
                sx={{
                  height: "250px",
                  objectFit: "scale-down",
                }}
              />
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default ConstructAndInstall;
