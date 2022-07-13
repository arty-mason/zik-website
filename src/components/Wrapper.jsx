import React from "react";

import { Container } from "@mui/material";

const Wrapper = (props) => {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {props.children}
    </Container>
  );
};

export default Wrapper;
