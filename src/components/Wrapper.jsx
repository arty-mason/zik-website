import { Container } from "@mui/material";
import React from "react";

const Wrapper = (props) => {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90vw",
      }}
    >
      {props.children}
    </Container>
  );
};

export default Wrapper;
