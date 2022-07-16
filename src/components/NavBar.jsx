import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Divider,
  ListItem,
  Typography,
  Button,
  List,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Popover from "./Popover";
import pages from "../services/pages";
import languages from "../services/languages";

import { Colors } from "../config/design-config";
import { theme } from "../config/color-config";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  ///Using the useState hook to create a state (open) and a state changer (setOpen)
  ///Assigning the variables to the hook and setting default state value to false
  return (
    <AppBar
      ///The navbar itself
      elevation={12}
      disableGutters
      position="sticky"
      sx={{
        backgroundColor: "white",
        borderRadius: `10px`,
        bottom: "0",
        left: "0",
        width: "100%",
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
        <IconButton
          sx={{
            color: theme.palette.primary.dark,
          }}
        >
          <MenuIcon
            onClick={() => setOpen(true)}
            ///Firing callback to set the open state to "true" by clicking on the burger menu (opens the menu)
          />
          <Typography
            sx={{
              color: Colors.Grey.dark,
              fontSize: "25px",
              display: { sm: "block", xs: "none" },
              marginLeft: "10px",
            }}
          >
            Меню
          </Typography>
        </IconButton>
        <Button
          ///The place for the logo
          color="inherit"
          component={Link}
          to="/home"
        >
          <img
            src={require("../img/zikLogoBlue.jpg")}
            ///Importing logo from the folder
            alt="Zik logo"
            height="100px"
            width="150px"
          />
        </Button>
        <Typography color="primary" position="absolute" top="4" right="100px">+34 666 399 550</Typography>
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
                    color: theme.palette.secondary.dark,
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
            ///Firing callback to set the open state to "false" by clicking on the burger menu (closes the menu)
          />
        </IconButton>
        <Divider
        ///The divider line
        />
        <List
        ///Importing List to give structure to the links
        >
          {pages.map((page) => (
            <ListItem
              key={page.id}
              ///Importing ListItem to separate links into lines
            >
              <Button
                color="inherit"
                component={Link}
                to={page.to}
                sx={{
                  my: 2,
                  border: `2px solid ${Colors.Grey.main}`,
                  backgroundColor: theme.palette.primary.dark,
                  borderRadius: "30px",
                  width: {
                    xs: "70vw",
                    sm: "30vw",
                    ///Adapting the box width to smaller screen resolution
                  },
                  height: {
                    xs: "11vh",
                    sm: "12vh",
                    ///Adapting the box height to smaller screen resolution
                    md: "10vh",
                  },
                }}
              >
                <Typography
                  variant="text"
                  component="div"
                  color={theme.palette.secondary.main}
                  textAlign="center"
                >
                  {page.name}
                </Typography>
              </Button>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};
export default NavBar;
