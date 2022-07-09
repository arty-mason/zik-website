import * as React from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Menu,
  // MenuItem,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Popover from "./Popover";

import languages from "../services/languages";

/* const pages = [
  "Строительно-монтажные работы",
  "Установка лифтов",
  "Обслуживание коммерческих объектов и жилых домов",
]; */

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        width: "100vw",
        marginTop: -1,
        marginLeft: -1,
        backgroundColor: "#005b84",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button>
            {/* <img src="../img/zikLogoBlue.jpg" alt="Company Logo" /> */}
            <Button color="inherit" component={Link} to="/home">
              <Typography variant="text" component="div" color="#fbaf1a">
                ZiK
              </Typography>
            </Button>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {/*       {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      maxWidth: "50px",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))} 
              */}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {/*   {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#fbaf1a", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
            <Button color="inherit" component={Link} to="/construct">
              <Typography variant="text" component="div" color="#fbaf1a">
                "Строительно-монтажные работы"
              </Typography>
            </Button>
            <Button color="inherit" component={Link} to="/elevator">
              <Typography variant="text" component="div" color="#fbaf1a">
                "Установка лифтов"
              </Typography>
            </Button>
            <Button color="inherit" component={Link} to="/facility">
              <Typography variant="text" component="div" color="#fbaf1a">
                "Обслуживание коммерческих объектов и жилых домов"
              </Typography>
            </Button>
          </Box>
          <Popover>
            {languages.map((lang) => (
              ///Iterating through language array using .map function
              <Button key={lang.id}>
                {/* Rendering each language in a button, using id as a key */}
                {lang.name}
                {/* Rendering the language name in each button */}
              </Button>
            ))}
          </Popover>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
