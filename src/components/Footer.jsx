import React from "react";

import { Box, Button, Typography, Divider, Paper } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

/* import LeftPopper from "./LeftPopper"; */
import instagram from "../img/socialMedia/instagram.svg";
import facebook from "../img/socialMedia/facebook.svg";

import { usePageTheme } from "../services/page-theme.hook";
import { useTranslation } from "react-i18next";
import { footerContent } from "../services/footer-content";

const Footer = () => {
  const { logoSrc } = usePageTheme();
  const { t } = useTranslation();

  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return (
    <Paper
      elevation={20}
      sx={{
        position: "relative",
        px: { md: "40px", sx: "none" },
        borderRadius: "15px",
        display: "flex",
        justifyContent: { md: "space-around", xs: "center" },
        alignItems: { sm: "center", xs: "normal" },
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      <Button>
        <img src={logoSrc} alt="Zik Logo" style={{ height: 80 }} />
      </Button>
      <Box>
        <Typography
          variant="h6"
          component="h6"
          textAlign="center"
          textTransform="uppercase"
        >
          {t("label_footer_contacts")}
        </Typography>
        <Divider color="black" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {/*   <LeftPopper /> */}
          {footerContent.map((content) => {
            const IconComponent = content.icon;
            return (
              <Box
                key={content.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: { sm: "358px", xs: "320px" },
                  mb: "5px",
                }}
              >
                <IconComponent />
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "15px" },
                    mx: "7px",
                    my: "3px",
                    textAlign: "center",
                  }}
                >
                  {content.info}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      {isSmallScreen ? null : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              width: "150px",
            }}
          >
            <Typography
              component="h6"
              textAlign="center"
              textTransform="uppercase"
              sx={{
                width: "150px",
                fontSize: "13px",
              }}
            >
              <b> {t("label_footer_social_media")}</b>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "150px",
              }}
            >
              <Button href="">
                <img
                  src={instagram}
                  alt="Instagram"
                  objectFit="cover"
                  width="30px"
                  height="35px"
                />
              </Button>
              <Button href="">
                <img
                  src={facebook}
                  alt="Facebook"
                  objectFit="cover"
                  width="30px"
                  height="30px"
                />
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default Footer;
