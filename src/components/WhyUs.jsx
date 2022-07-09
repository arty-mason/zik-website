import {
  Box,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import reasons from "../services/reasons-to-choose";

const WhyUs = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        marginBottom={3}
        textAlign="center"
      >
        Почему выбирают нас?
      </Typography>
      <Paper
        elevation={15}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "& > :not(style)": {
            m: 4,
            width: 400,
            height: 400,
          },
        }}
      >
        {reasons.map((reason) => {
          return (
            <Card
              sx={{ maxWidth: 350, height: "400px", borderRadius: "10px" }}
              elevation={15}
            >
              <CardContent>
                <Typography marginBottom={3}> {reason.text}</Typography>
                <CardMedia
                  component="img"
                  src={reason.img}
                  alt={reason.name}
                  sx={{
                    height: "150px",
                    width: "150px",
                    objectFit: "scale-down",
                    marginLeft: "25%",
                  }}
                />
              </CardContent>
            </Card>
          );
        })}
      </Paper>
    </Box>
  );
};

export default WhyUs;
