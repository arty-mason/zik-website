import React from "react";

import { Box, Typography, Card } from "@mui/material";

import pages from "../services/pages";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {pages.map((page) => (
        <Box
          key={page.id}
          sx={{
            width: {
              xl: "300px",
              lg: "275px",
              md: "250px",
              sm: "200px ",
              xs: "150px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              minHeight: "75px",
            }}
          >
            <Typography
              variant="text"
              component="h3"
              color={page.color}
              textAlign="center"
              m="10px"
              mb="15px"
            >
              {page.name}
            </Typography>
          </Box>
          <Link to={page.to}>
            <Card
              ///Importing ListItem to separate links into lines
              sx={{
                position: "relative",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                align: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                boxShadow: `1px 1px 7px ${page.color}`,
                height: {
                  xl: "300px",
                  lg: "275px",
                  md: "250px",
                  sm: "200px ",
                  xs: "150px",
                },
                /* background: `url(${page.background})`, */
                "&:hover": {
                  cursor: "pointer",
                  boxShadow: `3px 3px 21px ${page.color}`,
                },
              }}
            >
              <Box
              /* sx={{
                  position: "absolute",
                  bottom: -290,
                  right: -235,
                  width: 400,
                  height: 400,
                  borderRadius: 200,
                  background: "#FFFFFF",
                }} */
              />
              <img
                src={page.background}
                alt="Logo"
                objectFit="scale-down"
                style={{
                  position: "relative",
                  height: "100%",
                }}
              />
            </Card>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Home;
