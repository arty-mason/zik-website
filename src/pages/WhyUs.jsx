import React from "react";

import { Box, Container } from "@mui/material";

import Swing from "../components/WhyUsCarousel";
import { Colors } from "../config/design-config";

const WhyUs = () => {
  return (
    <Container>
      <Box
        elevation={10}
        sx={{
          mb: "40px",
          mx: { lg: "80px", md: "60px", sm: "40px", xs: "20px" },
          border: { xs: "none", sm: `3px inset ${Colors.Grey.ultraLight}` },
        }}
      >
        <Swing />
      </Box>
    </Container>
  );
};

export default WhyUs;
