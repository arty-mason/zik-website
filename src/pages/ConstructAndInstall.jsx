import {
  Box,
  Card,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";

import { styled } from "@mui/system";
import React from "react";
import TextField from "../shared/text-field";
import servicesTypes from "../services/construct-services";
import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

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
    <Container container justifyContent="center">
      <TextField
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "20px",
          color: Colors.Red.main,
        }}
      >
        Строительно-монтажные работы
      </TextField>
      <Box
        sx={{
          my: "35px",
        }}
      >
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <TextField
            variant="p"
            sx={{
              fontSize: "30px",
              color: Colors.Red.dark,
              my: "20px",
            }}
          >
            Вам надо провести строительно-монтажные работы, но вы не знаете где
            найти надежных и качественных специалистов?
            <br /> <br />
            Наша компания предоставляет комплексные решения в сфере
            проектирования, монтажа и технического обслуживания с лояльными
            ценами для клиента.
          </TextField>
        </Box>
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          <TextField
            variant="p"
            sx={{
              fontSize: "30px",
              color: Colors.Red.dark,
            }}
          >
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
      </Box>
      <TextField
        variant="h2"
        component="h1"
        sx={{
          textAlign: "center",
          marginTop: "20px",
          color: Colors.Red.main,
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
                width: "600px",
                height: "470px",
                marginRight: "50px",
                my: "50px",
                px: "20px",
                py: "15px",
              }}
            >
              <CustomBox>
                <TextField sx={{ color: theme.palette.secondary.main }}>
                  {service.serviceName}
                </TextField>
              </CustomBox>
              <CustomBox>
                <TextField sx={{ color: theme.palette.secondary.dark }}>
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
    </Container>
  );
};

export default ConstructAndInstall;
