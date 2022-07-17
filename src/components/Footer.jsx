import React from "react";

import { Box, Button, Typography, Divider, Paper } from "@mui/material";

import zikLogoBlue from "../img/zikLogoBlue.jpg";

import { footerContent } from "../services/footer-content";

import { theme } from "../config/color-config";
import LeftPopper from "./LeftPopper";

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
          justifyContent: "space-around",
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
          {/*   {footerContent.map((content) => {
              return (
                <Box key={content.id}>
                  <Box
                    sx={{
                      m: "5px",
                    }}
                  >
                    <Button  variant="contained">
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
            })} */}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Footer;
