import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  Container,
  IconButton,
  SwipeableDrawer,
  Divider,
  ListItem,
  Typography,
  Button,
  Hidden,
  List,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Popover from "./Popover";
import pages from "../services/pages";
import languages from "../services/languages";

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
        backgroundColor: "#005b84",
        border: "1px solid #262626",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          ///A toolbar to hide the nav links once the screen is small
          disableGutters
          ///Disabling gutter padding left from Toolbar
        >
          <Button
            // The place for the logo
            color="inherit"
            component={Link}
            to="/home"
            sx={{
              display: { md: "flex", xs: "none" },
            }}
          >
            <Typography
              color="#fbaf1a"
              border="1px solid #fbaf1a"
              px="7px"
              py="4px"
            >
              ZiK
            </Typography>
          </Button>
          <Hidden
            smDown
            ///The enclosed content will be hidden on given resolution or lower
          >
            {pages.map((page) => {
              return (
                <Box
                  key={page.id}
                  sx={{
                    marginRight: "30px",
                    display: "flex",
                    juistifyContent: "center",
                    alignItems: "center",
                    flexShrink: "1",

                    maxWidth: {
                      md: "260px",
                      lg: "300px",
                      xl: "475px",
                    },
                  }}
                >
                  <Button
                    color="inherit"
                    component={Link}
                    to={page.to}
                    sx={{
                      my: 2,
                      color: "#fbaf1a",
                      display: "block",
                      border: "1px solid #fbaf1a",
                    }}
                  >
                    <Typography
                      variant="text"
                      component="div"
                      color="#fbaf1a"
                      textAlign="center"
                    >
                      {page.name}
                    </Typography>
                  </Button>
                </Box>
              );
            })}
          </Hidden>
          <Hidden
            smUp
            ///The enclosed content will be hidden on given resolution or higher
          >
            <IconButton>
              <MenuIcon
                onClick={() => setOpen(true)}
                ///Firing callback to set the open state to "true" by clicking on the burger menu (opens the menu)
              />
            </IconButton>
          </Hidden>
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
      </Container>
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
                  color: "#fbaf1a",
                  display: "block",
                  border: "1px solid #fbaf1a",
                }}
              >
                <Typography
                  variant="text"
                  component="div"
                  color="#fbaf1a"
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