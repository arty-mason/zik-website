import React from "react";

import {
  Box,
  Button,
  Typography,
  Divider,
  Paper,
  CardMedia,
} from "@mui/material";

import LeftPopper from "./LeftPopper";
import instagram from "../img/social/instagram.svg";
import facebook from "../img/social/facebook.svg";
import zikLogoBlue from "../img/zikLogoBlue.jpg";

const Footer = () => {
  return (
    <Box width="100%">
      <Paper
        elevation={20}
        sx={{
          position: "relative",
          /*  py: "20px", */
          px: "40px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "space-around",
          /*   "&:not-last-child": {
            justifyContent: "space-between",
          }, */
          alignItems: "center",
        }}
      >
        <Button>
          <img src={zikLogoBlue} alt="Zik Logo" style={{ height: 80 }} />
        </Button>
        <Box>
          <Box>
            <Typography variant="h6" component="h6" textAlign="center">
              ИНФОРМАЦИЯ
            </Typography>
            <Divider color="black" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <LeftPopper />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" width="100px">
          <Button href="">
            <CardMedia
              component="img"
              src={instagram}
              objectFit="scale-down"
              width="50px"
              height="50px"
            />
          </Button>
          <Button href="">
            <CardMedia
              component="img"
              src={facebook}
              objectFit="scale-down"
              width="50px"
              height="50px"
            />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;
