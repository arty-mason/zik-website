import React from "react";

import { Box } from "@mui/system";
import { Carousel } from "react-responsive-carousel";
import { workPhotos } from "../services/experience-images";
import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";
import { Typography } from "@mui/material";

const ExperienceGallery = () => {
  return (
    <Carousel autoPlay infiniteLoop>
      {workPhotos.map((photo) => {
        return (
          <Box
            key={photo.id}
            sx={{
              mt: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${Colors.Grey.light})`,
                borderRadius: "22px",
                py: "50px",
                px: "150px",
              }}
            >
              <Typography
                variant="h3"
                component="h6"
                sx={{
                  mb: "20px",
                  color: theme.palette.secondary.main,
                  textAlign: "center",
                }}
              >
                Наши работы:
              </Typography>
              <Box
                sx={{
                  background: `url(${photo.img})`,
                  backgroundSize: "cover",
                  height: "800px",
                  width: "600px",
                  border: `5px outset ${Colors.Grey.ultraLight}`,
                  borderRadius: "7px",
                  mb: "20px",
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ExperienceGallery;
