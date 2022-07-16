import React from "react";

import { Box, Typography, Button, Paper, Card } from "@mui/material";

import pages from "../services/pages";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        py: "5vh",
        px: "20px",
      }}
    >
      <Paper
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
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "300px",
              height: "300px",
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
              <img
                src={page.img}
                alt="Logo"
                sx={{
                  height: "100px",
                  width: "200px",
                  objectFit: "scale-down",
                }}
              />
            </Button>
          </Card>
        ))}
      </Paper>
    </Box>
  );
};

export default Home;
