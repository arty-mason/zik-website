import React from "react";

import { Box, CardMedia, Paper, Typography } from "@mui/material";

import constructionSite from "../img/backgrounds/constructionSite.jpeg";
import { theme } from "../config/color-config";
import styled from "@emotion/styled";

const CommercialText = styled(Typography)({
  marginBottom: "30px",
  color: theme.palette.primary.main,
});

const AboutUs = () => {
  return (
    <Box
      display="flex"
      flex-direction="column"
      alignItems="stretch"
      justifyContent="center"
      marginBottom="20px"
    >
      <Paper
        elevation={15}
        sx={{
          borderRadius: 15,
          my: "20px",
          padding: "30px",
          width: "70%",
        }}
      >
        <CommercialText variant="h6" component="h1" textAlign="center">
          <b>«ZAVIISKYI & KABACHEK BUSINESS COMPANY» </b> специализируется на
          услугах для клиентов в следующих отраслях:
        </CommercialText>
        <CommercialText variant="h6" component="p">
          - строительно-монтажные работы, <br />
          - установку и обслуживание лифтов, <br /> - обслуживание коммерческих
          объектов и жилых домов.
          <br /> <br />
          Вы платите только за реально предоставленные услуги, а наши
          квалифицированные специалисты выполнят все типы работ в установленные
          сроки по доступным ценам для клиента.
        </CommercialText>
      </Paper>

      <Paper
        elevation={15}
        sx={{
          borderRadius: 15,
          my: "20px",
          ml: "50px",
          width: "70%",
          padding: "30px",
          display: "flex",
        }}
      >
        <CardMedia
          component="img"
          src={constructionSite}
          sx={{
            borderRadius: 5,
            objectFit: "scale-down",
          }}
        />
      </Paper>
    </Box>
  );
};

export default AboutUs;
