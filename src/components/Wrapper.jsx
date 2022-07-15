import { Container } from "@mui/material";
import React from "react";

const Wrapper = (props) => {
  return (
    <Container
      sx={{
        maxWidth: "1920px",
        maxHeight: "1080px",
      }}
    >
      {props.children}
    </Container>
  );
};
export default Wrapper;
