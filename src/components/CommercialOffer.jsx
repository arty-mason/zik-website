import React from "react";

import { Grid, Typography } from "@mui/material";

import CustomPaper from "../shared/custom-paper";
import CustomText from "../shared/custom-text";

const CommercialOffer = () => {
  return (
    <Grid
      // className="animate__animated animate__flip"
      container
      justifyContent="center"
    >
      <CustomPaper
        elevation={12}
        sx={{
          border: "2px solid #262626",
          borderRadius: "10px",
          backgroundColor: "#005b84",
        }}
      >
        <CustomText variant="h4" component="h1">
          Коммерческое предложение
        </CustomText>
        <CustomText component="p" fontSize="18px">
          «ZAVIISKYI & KABACHEK BUSINESS COMPANY» <br /> <br />
          специализируется на услугах для клиентов в следующих отраслях: <br />
          строительно-монтажные работы,
          <br />
          установку и обслуживание лифтов,
          <br />
          обслуживание коммерческих объектов и жилых домов.
        </CustomText>
        <CustomText component="p" fontSize="18px">
          Вы платите только за реально предоставленные услуги, а наши
          квалифицированные специалисты выполнят все типы работ в установленные
          сроки по доступным ценам для клиента.
        </CustomText>
      </CustomPaper>
    </Grid>
  );
};

export default CommercialOffer;
