import React from "react";

import { Box, Button, Typography, Divider, Paper } from "@mui/material";

import zikLogoBlue from "../img/zikLogoBlue.jpg";

import styled from "@emotion/styled";

import { footerContent } from "../services/footer-content";
import { Colors } from "../config/design-config";
import { theme } from "../config/color-config";

const CustomBox = styled(Box)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
});

const FooterHeadline = styled(Typography)({
  padding: "10px",
  margin: "3px",
});

const FooterText = styled(Typography)({
  padding: "5px",
  margin: "0.5px",
});

const Footer = () => {
  return (
    <Box>
      <Paper
        elevation={20}
        sx={{
          position: "relative",
          p: "20px",
          bottom: "0",
          border: `2px solid ${Colors.Grey.light}`,
          borderRadius: "15px",
          width: "1920px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button>
          <img src={zikLogoBlue} alt="Zik Logo" height="160px" width="250x" />
        </Button>
        <CustomBox>
          <Box>
            <FooterHeadline variant="h6" component="h6" textAlign="center">
              ИНФОРМАЦИЯ
            </FooterHeadline>
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
                    <FooterText
                      sx={{
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {content.name}
                    </FooterText>
                  </Button>
                </Box>
              </Box>
            );
          })}
        </CustomBox>
      </Paper>
    </Box>
  );
};

export default Footer;
