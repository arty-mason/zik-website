import { Container } from "@mui/material";
import React from "react";

const SectionWrapper = (props) => {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "center",
        flexShrink: 1,
        alignItems: "center",
        maxWidth: { lg: "1170px" },
        minWidth: "100%",
        my: "auto",
        mx: 0,
        py: "16px",
      }}
    >
      {props.children}
    </Container>
  );
};

export default SectionWrapper;
