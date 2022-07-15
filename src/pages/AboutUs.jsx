import React from "react";

import { Box } from "@mui/material";

import CustomPaper from "../shared/custom-paper";
import CustomText from "../shared/custom-text";

import constructionSite from "../img/backgrounds/constructionSite.jpeg";
import { theme } from "../config/color-config";

const AboutUs = () => {
  return (
    <Box>
      <CustomText
        variant="h3"
        component="h1"
        color={theme.palette.secondary.dark}
        textAlign="center"
      >
        Коммерческое предложение
      </CustomText>
      <Box
        // className="animate__animated animate__flip"
        container
        spacing={2}
        sx={{
          my: "15px",
          justifyContent: "space-around",
        }}
      >
        <CustomPaper
          elevation={15}
          sx={{
            minHeight: "70vh",
            borderRadius: 15,
            my: "20px",
            padding: "30px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${constructionSite})`,
            opacity: 0.3,
            //
          }}
        >
          <CustomText
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
            квалифицированные специалисты выполнят все типы работ в
            установленные сроки по доступным ценам для клиента.
          </CustomText>
        </CustomPaper>
      </Box>
    </Box>
  );
};

export default AboutUs;
