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

const CustomBox = styled(Box)({
  padding: "10px",
  display: "flex",
  borderRadius: "5px",
});

const ConstructAndInstall = () => {
  return (
    <Container container>
      <CustomBox>
        <TextField
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
          }}
        >
          Строительно-монтажные работы
        </TextField>
      </CustomBox>
      <Box>
        <Typography>
          Вам надо провести строительно-монтажные работы, но вы не знаете где
          найти надежных и качественных специалистов?
          <br />
          Наша компания предоставляет комплексные решения в сфере
          проектирования, монтажа и технического обслуживания с лояльными ценами
          для клиента.
        </Typography>
        <Typography>
          Преимущество сотрудничества с нами – выполнение любых общих
          строительных работ в установленные сроки, использование только
          качественных европейских материалов для строительства, выполнение
          работ только квалифицированными рабочими и специалистами.
          <br />
          Основная задача нашего строительного отдела – показать клиенту
          истинное качество выполнения работ за оптимальную цену.
          <br />
          Опыт работы наших специалистов не даст сомневаться в выборе нашей
          компании!
        </Typography>
      </Box>
      <Paper>
        <Typography>Услуги, на которых мы специализируемся:</Typography>
        {servicesTypes.map((service) => {
          return (
            <Card key={service.id}>
              <Typography>{service.serviceName}</Typography>
              <Typography>{service.serviceDescription};</Typography>
              <CardMedia component="img" src={service.img} />
            </Card>
          );
        })}
      </Paper>
    </Container>
  );
};

export default ConstructAndInstall;
