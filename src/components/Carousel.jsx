import React from "react";

import { Carousel } from "react-responsive-carousel";
// Importing Carousel component after installing package
import "react-responsive-carousel/lib/styles/carousel.css";
// Importing the carousel stylesheet

// Importing the carousel data array
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const PicDescription = styled(Typography)({
  marginBottom: "10px",
});

const Swing = () => {
  return (
    <Carousel autoPlay="true">
      <div>
        <Typography variant="h4" component="h1"></Typography>
        <PicDescription variant="h6" component="h1"></PicDescription>
        <img alt=" src=" />
        <p className="legend" paddingBottom="20px"></p>
      </div>
    </Carousel>
  );
};

export default Swing;
