import React from "react";

import { Box, CardMedia, Grid } from "@mui/material";

import CustomPaper from "../shared/custom-paper";
import CustomText from "../shared/custom-text";

import constructionSite from "../img/backgrounds/constructionSite.jpeg";
import { theme } from "../config/color-config";

const CommercialOffer = () => {
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
      <Grid
        // className="animate__animated animate__flip"
        container
        spacing={2}
        sx={{
          my: "15px",
          justifyContent: "space-around",
        }}
      >
        <Grid item xs={4}>
          <CustomPaper
            elevation={15}
            sx={{
              borderRadius: 15,
              my: "20px",
              width: "500px",
              height: "500px",
              padding: "30px",
              /*   backgroundImage: "url('../img/backgrounds/crane.jpeg')",
            //! Not working properly yet 
            */
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
              <b>«ZAVIISKYI & KABACHEK BUSINESS COMPANY» </b> специализируется
              на услугах для клиентов в следующих отраслях:
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
        </Grid>
        <Grid item xs={6}>
          <CustomPaper
            elevation={15}
            sx={{
              borderRadius: 15,
              my: "20px",
              height: "500px",
              padding: "30px",
            }}
          >
            <Box
              container
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                src={constructionSite}
                sx={{
                  borderRadius: 5,
                  objectFit: "scale-down",
                  width: {
                    lg: "650px",
                    md: "550px",
                    sm: "450px",
                    xs: "350px",
                  },
                  maxHeight: "450px",
                }}
              />
            </Box>
          </CustomPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommercialOffer;
