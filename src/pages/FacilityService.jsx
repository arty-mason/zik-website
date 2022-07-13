import {
  Box,
  Card,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import facilities from "../services/facility-services";

const FacilityService = () => {
  return (
    <Container>
      <Box>
        <Typography>
          Обслуживание коммерческих объектов и жилых домов
        </Typography>
      </Box>

      {facilities.map((facility) => {
        return (
          <Paper key={facility.id}>
            <Card>
              <Typography>{facility.text}</Typography>
            </Card>
            <Card>
              <CardMedia component="img" src={facility.img}/>
            </Card>
          </Paper>
        );
      })}
    </Container>
  );
};

export default FacilityService;
