import React from "react";

import { CardMedia, Grid } from "@mui/material";

import CustomPaper from "../shared/custom-paper";
import CustomText from "../shared/custom-text";

import constructionSite from "../img/backgrounds/constructionSite.jpeg";
import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";

const CommercialOffer = () => {
  return (
    <Grid
      // className="animate__animated animate__flip"
      container
      spacing={2}
      sx={{
        my: "20px",
        justifyContent: "space-around",
      }}
    >
      <Grid item xs={4}>
        <CustomPaper
          elevation={13}
          sx={{
            borderRadius: 5,
            border: `2px solid ${Colors.Grey.main}`,
            my: "50px",
            width: "500px",
            height: "600px",
            padding: "30px",
            backgroundImage: "url('../img/backgrounds/crane.jpeg')",
            //! Not working properly yet
            // backgroundColor: Colors.Grey.ultraLight,
          }}
        >
          <CustomText
            variant="h3"
            component="h1"
            color={theme.palette.primary.dark}
            textAlign="center"
          >
            Коммерческое предложение
          </CustomText>
          <CustomText
            variant="h6"
            component="p"
            color={theme.palette.primary.main}
            textAlign="left"
          >
            <b>«ZAVIISKYI & KABACHEK BUSINESS COMPANY» </b> специализируется на
            услугах для клиентов в следующих отраслях:
            <ul textAlign="left">
              <li>строительно-монтажные работы,</li>
              <li>
                установку и обслуживание лифтов, обслуживание коммерческих
              </li>
              <li> объектов и жилых домов.</li>
            </ul>
          </CustomText>
          <CustomText
            variant="h5"
            component="p"
            color={theme.palette.primary.main}
            textAlign="right"
          >
            Вы платите только за реально предоставленные услуги, а наши
            квалифицированные специалисты выполнят все типы работ в
            установленные сроки по доступным ценам для клиента.
          </CustomText>
        </CustomPaper>
      </Grid>
      <Grid item xs={6}>
        <CustomPaper
          elevation={13}
          sx={{
            borderRadius: 5,
            border: `2px solid ${Colors.Grey.main}`,
            my: "50px",
            height: "600px",
            padding: "30px",
            // backgroundColor: Colors.Grey.ultraLight,
          }}
        >
          <CardMedia component="img" src={constructionSite} />
        </CustomPaper>
      </Grid>
    </Grid>
  );
};

export default CommercialOffer;
