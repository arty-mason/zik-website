import React from "react";

import { Box, Typography, Button, Card } from "@mui/material";

import pages from "../services/pages";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        py: "12vh",
        px: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {pages.map((page) => (
          <Card
            key={page.id}
            ///Importing ListItem to separate links into lines
            sx={{
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              align: "center",
              display: "flex",
              flexDirection: "column",
              borderRadius: "15px",
              width: {
                xl: "300px",
                lg: "275px",
                md: "250px",
                sm: "200px ",
                xs: "150px",
              },
              height: {
                xl: "300px",
                lg: "275px",
                md: "250px",
                sm: "200px ",
                xs: "150px",
              },
              boxShadow: `1px 1px 7px ${page.color}`,
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to={page.to}
              sx={{
                my: 2,
              }}
            >
              <Typography
                variant="text"
                component="div"
                color={page.color}
                textAlign="center"
              >
                {page.name}
              </Typography>
            </Button>
            <img
              src={page.img}
              alt="Logo"
              sx={{
                /*  width: {
                  xl: "200px",
                  lg: "175px",
                  md: "150px",
                  sm: "100px ",
                  xs:  "none",
                },
                height: {
                  xl: "150px",
                  lg: "125px",
                  md: "100px",
                  sm: "50px ",
                  xs: "none",
                }, */
                width: "75%",
                height: "50%",
                objectFit: "scale-down",
              }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
