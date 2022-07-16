import React from "react";

import { Box, CardMedia, Paper, Typography } from "@mui/material";

import constructionSite from "../img/backgrounds/constructionSite.jpeg";
import { theme } from "../config/color-config";

const AboutUs = () => {
  return (
    <Box display="flex">
      <Paper
        elevation={15}
        sx={{
          borderRadius: 15,
          my: "20px",
          padding: "30px",
          width: "70%",
        }}
      >
        <Typography
          variant="h6"
          component="p"
          color={theme.palette.primary.main}
          textAlign="center"
          sx={{
            py: "50px",
          }}
        >
          <b>«ZAVIISKYI & KABACHEK BUSINESS COMPANY» </b> специализируется на
          услугах для клиентов в следующих отраслях:
          <ul textAlign="left">
            <li>строительно-монтажные работы,</li>
            <li>установку и обслуживание лифтов,</li>
            <li>обслуживание коммерческих объектов и жилых домов.</li>
          </ul>
          Вы платите только за реально предоставленные услуги, а наши
          квалифицированные специалисты выполнят все типы работ в установленные
          сроки по доступным ценам для клиента.
        </Typography>
      </Paper>

      <Paper
        elevation={15}
        sx={{
          borderRadius: 15,
          my: "20px",
          width: "70%",
          padding: "30px",
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
