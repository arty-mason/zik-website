import React, { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Divider,
  Typography,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Popover from "./Popover";
import languages from "../services/languages";

import instagram from "../img/socialMedia/instagram.svg";
import facebook from "../img/socialMedia/facebook.svg";

import { BurgerMenuLinks } from "./BurgerMenuLinks";
import { usePageTheme } from "../services/page-theme.hook";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  ///Using the useState hook to create a state (open) and a state changer (setOpen)
  ///Assigning the variables to the hook and setting default state value to false
  const { logoSrc, colors } = usePageTheme();
  const { t, i18n } = useTranslation();

  return (
    <AppBar
      ///The navbar itself
      elevation={12}
      disableGutters
      position="fixed"
      sx={{
        backgroundColor: "white",
      }}
    >
      <Toolbar
        ///A toolbar to hide the nav links once the screen is small
        disableGutters
        ///Disabling gutter padding left from Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            pl: "15px",
            width: { md: "200px", xs: "50px" },
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          <IconButton
            sx={{
              color: colors.primary,
              "&:hover": {
                color: colors.secondary,
              },
            }}
          >
            <MenuIcon width="35px" height="35px" />
          </IconButton>
          <Typography
            sx={{
              color: colors.primary,
              fontSize: "25px",
              display: { md: "block", xs: "none" },
              marginLeft: "10px",
              marginTop: "3px",
              textTransform: "uppercase",
              "&:hover": {
                color: colors.secondary,
                textDecoration: "underline",
              },
            }}
          >
            {t("label_navbar_menu")}
          </Typography>
        </Box>
        <Button
          ///The place for the logo
          color="inherit"
          component={Link}
          to="/home"
        >
          <img src={logoSrc} alt="Zik logo" height="70px" />
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { md: "200px", xs: "none" },
          }}
        >
          <a style={{ textDecoration: "none" }} href="tel:+34 666 399 550">
            <Typography
              color={colors.primary}
              sx={{
                display: { md: "block", xs: "none" },
                "&:hover": {
                  color: colors.secondary,
                  textDecoration: "underline",
                },
              }}
            >
              +34 666 399 550
            </Typography>
          </a>
          <Popover>
            {languages.map((lang) => (
              ///Iterating through language array using .map function
              <Box
                key={lang.id}
                ///Rendering each language in a button, using id as a key
              >
                <Button onClick={() => i18n.changeLanguage(lang.lngCode)}>
                  <Typography
                    sx={{
                      color: colors.primary,
                      "&:hover": {
                        color: colors.secondary,
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {
                      lang.name
                      ///Rendering the language name in each button
                    }
                  </Typography>
                </Button>
              </Box>
            ))}
          </Popover>
        </Box>
      </Toolbar>
      <SwipeableDrawer
        ///The drawer imported from MUI
        anchor="left"
        ///The position of the drawer
        open={open}
        ///Constrolling the 'open' state by tying it up with useState hook
        onOpen={() => setOpen(true)}
        ///Callback fired when the component requests to be opened (setting open state to true).
        onClose={() => setOpen(false)}
        ///Callback fired when the component requests to be opened (setting open state to false).
      >
        <IconButton>
          <ChevronLeftIcon
            onClick={() => setOpen(false)}
            sx={{
              "&:hover": {
                color: colors.secondary,
              },
            }}
            ///Firing callback to set the open state to "false" by clicking on the burger menu (closes the menu)
          />
        </IconButton>
        <Divider
        ///The divider line
        />
        <BurgerMenuLinks onMenuItemClicked={() => setOpen(false)} />
        <Box
          sx={{
            display: {
              md: "none",
              xs: "flex",
            },

            position: "fixed",
            bottom: "10px",
            left: "5px",
            width: "5px",
          }}
        >
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
              <Button href="https://www.instagram.com/mejor.servicio.de.limpieza/?r=nametag">
                <img
                  src={instagram}
                  alt="Instagram"
                  objectFit="cover"
                  width="30px"
                  height="35px"
                />
              </Button>
              <Button href="https://www.facebook.com/profile.php?id=100083217857529">
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
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
};
export default NavBar;
