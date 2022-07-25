import React from "react";

import {
  Box,
  Button,
  Typography,
  Divider,
  Paper,
  CardMedia,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

import LeftPopper from "./LeftPopper";
import instagram from "../img/socialMedia/instagram.svg";
import facebook from "../img/socialMedia/facebook.svg";

import { usePageTheme } from "../services/page-theme.hook";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const { logoSrc } = usePageTheme();
  const { t } = useTranslation();

  return (
    <Box width="100%">
      <Paper
        elevation={20}
        sx={{
          position: "relative",
          px: "40px",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Button>
          <img src={logoSrc} alt="Zik Logo" style={{ height: 80 }} />
        </Button>
        {/*   {isSmallScreen ? (
          <Box sx={{ marginTop: "20px" }}>Small screen</Box>
        ) : ( */}
        <>
          <Box>
            <Box>
              <Typography
                variant="h6"
                component="h6"
                textAlign="center"
                textTransform="uppercase"
              >
                {t("label_footer_info")}
              </Typography>
              <Divider color="black" />
            </Box>
            <Box sx={{ display: "flex" }}>
              <LeftPopper />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100px",
            }}
          >
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
        </>
        {/* )} */}
      </Paper>
    </Box>
  );
};

export default Footer;
