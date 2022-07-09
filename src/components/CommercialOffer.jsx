import React from "react";

import { Grid, Typography } from "@mui/material";

import CustomPaper from "../shared/custom-paper";

const CommercialOffer = () => {
  return (
    <Grid container justifyContent="center">
      <CustomPaper
        elevation={12}
        sx={{
          border: "1px solid #262626",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" component="h1">
          Коммерческое предложение
        </Typography>
        <Typography variant="h6" component="p">
          «ZAVIISKYI & KABACHEK BUSINESS COMPANY» специализируется на услугах
          для клиентов в следующих отраслях: строительно-монтажные работы,
          установку и обслуживание лифтов, обслуживание коммерческих объектов и
          жилых домов.
        </Typography>
        <Typography variant="h6" component="p">
          Вы платите только за реально предоставленные услуги, а наши
          квалифицированные специалисты выполнят все типы работ в установлении
          сроки по доступным ценам для клиента.
        </Typography>
      </CustomPaper>
    </Grid>
  );
};

export default CommercialOffer;
