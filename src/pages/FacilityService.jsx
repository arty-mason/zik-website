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
            color: theme.palette.primary.dark,
            mt: "20px",
          }}
        >
          Обслуживание коммерческих объектов и жилых домов
        </TextField>
      </Box>
      {facilities.map((facility) => {
        return (
          <Paper
            key={facility.id}
            elevation={15}
            sx={{
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                p: "5px",
                mb: "50px",
                mt: "20px",
              }}
            >
              <Box
                elevation={10}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: "30px",
                  my: "50px",
                  mx: "20px",
                  border: `1px solid ${Colors.Grey.ultraLight}`,
                  borderRadius: "15px",
                  height: "300px",
                  width: "300px",
                }}
              >
                <TextField
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    color: theme.palette.primary.main,
                  }}
                >
                  {facility.text}
                </TextField>
              </Box>
              <Box sx={{}}>
                <CardMedia
                  component="img"
                  src={facility.img}
                  sx={{
                    width: "600px",
                    height: "390px",
                    objectFit: "fill",
                    border: `2px solid ${Colors.Grey.ultraLight}`,
                    borderRadius: "12px",
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
