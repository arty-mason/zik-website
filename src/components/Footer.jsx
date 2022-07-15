import React from "react";

import { Box, Button, Typography, Divider, Paper } from "@mui/material";

import zikLogoBlue from "../img/zikLogoBlue.jpg";

import { footerContent } from "../services/footer-content";

import { theme } from "../config/color-config";

const Footer = () => {
  return (
    <Box width="100%">
      <Paper
        elevation={20}
        sx={{
          position: "relative",
          py: "20px",
          px: "40px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button>
          <img src={zikLogoBlue} alt="Zik Logo" height="160px" width="250x" />
        </Button>
        <Box>
          <Box>
            <Typography variant="h6" component="h6" textAlign="center">
              ИНФОРМАЦИЯ
            </Typography>
            <Divider color="black" />
          </Box>
          {footerContent.map((content) => {
            return (
              <Box key={content.id}>
                <Box
                  sx={{
                    m: "5px",
                  }}
                >
                  <Button fullWidth variant="contained">
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {content.name}
                    </Typography>
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;
