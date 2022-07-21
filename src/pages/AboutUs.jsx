import React from "react";
/* import "animate.css"; */

import { Box, CardMedia, Paper, Typography } from "@mui/material";

import constructionSite from "../img/backgrounds/constructionSite.jpeg";
import { theme } from "../config/color-config";

import styled from "@emotion/styled";

const CommercialText = styled(Typography)({
  marginBottom: "20px",
});

const AboutUs = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginBottom="20px"
    >
      <Paper
        elevation={15}
        sx={{
          borderRadius: 15,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          my: "20px",
          p: "30px",
          width: "70%",
          border: `3px outset ${theme.palette.primary.main}`,
          "&:hover": {
            background: `linear-gradient(to right,  ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
            color: "white",
            border: "none",
          },
        }}
      >
        <CommercialText
          variant="h4"
          component="h1"
          textAlign="center"
          sx={{ color: theme.palette.secondary.dark }}
        >
          <b>«ZAVIISKYI & KABACHEK BUSINESS COMPANY» </b> специализируется на
          услугах для клиентов в следующих отраслях:
        </CommercialText>
        <CommercialText
          variant="h6"
          component="p"
          className="animate__bounce"
          // ! Not working yet
          sx={{ color: theme.palette.secondary.dark }}
        >
          - строительно-монтажные работы, <br />
          - установку и обслуживание лифтов, <br /> - обслуживание коммерческих
          объектов и жилых домов.
        </CommercialText>
        <CardMedia
          component="img"
          src={constructionSite}
          sx={{
            borderRadius: 5,
            objectFit: "scale-down",
            width: "80%",
          }}
        />
        <CommercialText
          variant="h6"
          component="p"
          textAlign="justify"
          sx={{
            my: "20px",
            mx: "95px",
            color: theme.palette.secondary.dark,
          }}
        >
          Вы платите только за реально предоставленные услуги, а наши
          квалифицированные специалисты выполнят все типы работ в установленные
          сроки по доступным ценам для клиента.
        </CommercialText>
      </Paper>
    </Box>
  );
};

export default AboutUs;
