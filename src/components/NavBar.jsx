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

import { BurgerMenuLinks } from "./BurgerMenuLinks";
import { usePageTheme } from "../services/page-theme.hook";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  ///Using the useState hook to create a state (open) and a state changer (setOpen)
  ///Assigning the variables to the hook and setting default state value to false
  const { logoSrc, colors } = usePageTheme();

  return (
    <AppBar
      ///The navbar itself
      elevation={12}
      disableGutters
      position="fixed"
      sx={{
        backgroundColor: "white",
        borderRadius: `10px`,
        top: "4px",
        left: "4px",
        right: "4px",
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
          px: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "200px",
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
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              color: colors.primary,
              fontSize: "25px",
              display: { sm: "block", xs: "none" },
              marginLeft: "10px",
              "&:hover": {
                color: colors.secondary,
                textDecoration: "underline",
              },
            }}
          >
            Меню
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
        <Box sx={{ display: "flex", alignItems: "center", width: "250px" }}>
          <a style={{ textDecoration: "none" }} href="tel:+34 666 399 550">
            <Typography
              color={colors.primary}
              sx={{
                "&:hover": {
                  color: colors.secondary,
                  textDecoration: "underline",
                },
              }}
              right="100px"
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
                <Button>
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
      </SwipeableDrawer>
    </AppBar>
  );
};
export default NavBar;
