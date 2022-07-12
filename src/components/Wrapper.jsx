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
      }}
    >
      {props.children}
    </Container>
  );
};

export default Wrapper;
