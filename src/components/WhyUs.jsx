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

import CustomText from "../shared/custom-text";

const WhyUs = () => {
  return (
    <Box elevation={10}>
      <Typography
        variant="h4"
        component="h1"
        marginBottom={3}
        textAlign="center"
        color="#005b84"
      >
        Почему выбирают нас?
      </Typography>
      <Paper
        elevation={15}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          border: "2px solid #262626",
          borderRadius: "15px",
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
              key={reason.id}
              sx={{
                maxWidth: "400px",
                height: "400px",
                borderRadius: "10px",
                backgroundColor: "#005b84",
                border: "2px solid #262626",
              }}
              elevation={15}
            >
              <CardContent>
                <CustomText
                  variant="body2"
                  component="p"
                  textAlign="center"
                  fontSize="18px"
                >
                  {reason.text}
                </CustomText>
                <Box marginTop="5%" marginLeft="10%">
                  <CardMedia
                    component="img"
                    src={reason.img}
                    alt={reason.name}
                    sx={{
                      height: "35%",
                      width: "35%",
                      objectFit: "fill",
                      marginLeft: "25%",
                      color: "#fbaf1a",
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Paper>
    </Box>
  );
};

export default WhyUs;
