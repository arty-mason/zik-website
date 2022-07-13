import React from "react";

import { Box, Button, Typography, Divider } from "@mui/material";

import zikLogoBlue from "../img/zikLogoBlue.jpg";

import CustomPaper from "../shared/custom-paper";
import styled from "@emotion/styled";

import { footerContent } from "../services/footer-content";
import { Colors } from "../config/design-config";
import { theme } from "../config/color-config";

const CustomBox = styled(Box)({
  padding: "10px",
  marginLeft: "10px",
  marginLeft: "10em",
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
  color: theme.palette.primary.main,
});

const Footer = () => {
  return (
    <Box
      container
      fixed
      sx={{
        width: "100%",
      }}
    >
      <CustomPaper
        elevation={20}
        sx={{
          position: "relative",
          p: "20px",
          bottom: "0",
          border: `2px solid ${Colors.Grey.light}`,
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            my: "auto",
            mx: "auto",
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              my: "auto",
              mr: "50px",
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button>
              <img
                src={zikLogoBlue}
                alt="Zik Logo"
                height="160px"
                width="250x"
              />
            </Button>
          </Box>
          {footerContent.map((content) => {
            return (
              <CustomBox key={content.id}>
                <Box>
                  <FooterHeadline
                    variant="h6"
                    component="h6"
                    textAlign="center"
                  >
                    {content.sectionTitle}
                  </FooterHeadline>
                </Box>
                <Box>
                  <Divider color="black" />
                  <Button>
                    <FooterText>{content.sectionOne}</FooterText>
                  </Button>
                  <Divider color="black" />
                  <Button>
                    <FooterText>{content.sectionTwo}</FooterText>
                  </Button>
                </Box>
              </CustomBox>
            );
          })}
        </Box>
      </CustomPaper>
    </Box>
  );
};

export default Footer;
