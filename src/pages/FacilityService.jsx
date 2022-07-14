import { Box, CardMedia, Container, Paper } from "@mui/material";
import React from "react";
import facilities from "../services/facility-services";
import TextField from "../shared/text-field";
import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";
const FacilityService = () => {
  return (
    <Container>
      <Box>
        <TextField
          variant="h4"
          component="h1"
          sx={{
            color: theme.palette.secondary.dark,
          }}
        >
          Обслуживание коммерческих объектов и жилых домов
        </TextField>
      </Box>
      {facilities.map((facility) => {
        return (
          <Paper key={facility.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                py: "20px",
              }}
            >
              <Box
                elevation={10}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  px: "40px",
                  my: "50px",
                  mx: "20px",
                  border: `1px solid ${Colors.Grey.ultraLight}`,
                  borderRadius: "15px",
                }}
              >
                <TextField
                  variant="h6"
                  component="p"
                  sx={{
                    color: Colors.Green.dark,
                  }}
                >
                  {facility.text}
                </TextField>
              </Box>
              <Box>
                <CardMedia
                  component="img"
                  src={facility.img}
                  sx={{
                    width: "700px",
                    height: "400px",
                    objectFit: "scale-down",
                  }}
                />
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Container>
  );
};

export default FacilityService;
