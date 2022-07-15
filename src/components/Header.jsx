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
  List,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Popover from "./Popover";
import pages from "../services/pages";
import languages from "../services/languages";
import { Colors } from "../config/design-config";
import { theme } from "../config/color-config";

const Header = () => {
  const [open, setOpen] = useState(false);
  ///Using the useState hook to create a state (open) and a state changer (setOpen)
  ///Assigning the variables to the hook and setting default state value to false
  return (
    <AppBar
      ///The navbar itself
      position="sticky"
      sx={{
        width: "100vw",
        marginTop: -1,
        marginLeft: -1,
        border: `2px solid ${Colors.Grey.light}`,
      }}
    >
      <Toolbar
        ///A toolbar to hide the nav links once the screen is small
        disableGutters
        ///Disabling gutter padding left from Toolbar
      >
        <IconButton>
          <MenuIcon
            onClick={() => setOpen(true)}
            ///Firing callback to set the open state to "true" by clicking on the burger menu (opens the menu)
          />
        </IconButton>
        <Popover>
          {languages.map((lang) => (
            //Iterating through language array using .map function
            <Box key={lang.id}>
              <Button>
                {/* Rendering each language in a button, using id as a key */}
                <Typography>{lang.name}</Typography>
                {/* Rendering the language name in each button */}
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
                  color: theme.palette.secondary.dark,
                  display: "block",
                  border: `1px solid ${theme.palette.secondary.dark}`,
                }}
              >
                <Typography
                  variant="text"
                  component="div"
                  color={theme.palette.secondary.dark}
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
export default Header;
