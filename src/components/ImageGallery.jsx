import React from "react";

import { Box } from "@mui/system";
import { Carousel } from "react-responsive-carousel";
import { workPhotos } from "../services/experience-images";
import { theme } from "../config/color-config";
import { Colors } from "../config/design-config";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ExperienceGallery = () => {
  const { t } = useTranslation();
  return (
    <Carousel autoPlay infiniteLoop>
      {workPhotos.map((photo) => {
        return (
          <Box
            key={photo.id}
            sx={
              {
                /*  mt: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: { lg: "800px", md: "700px", sm: "500px", xs: "250px" },
              background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${Colors.Grey.light})`,
              borderRadius: "22px",
              py: "50px",
              px: { lg: "150px", md: "100px", sm: "75px", xs: "50px" }, */
              }
            }
          >
            <Typography
              component="h6"
              sx={{
                mb: "20px",
                color: theme.palette.secondary.main,
                textAlign: "center",
                fontSize: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
              }}
            >
              {t("our_experience_work_demo")}
            </Typography>
            <Box
              sx={{
                background: `url(${photo.img})`,
                backgroundSize: "cover",
                height: {
                  lg: "800px",
                  md: "600px",
                  sm: "500px",
                  xs: "400px",
                },
                width: {
                  lg: "600px",
                  md: "400px",
                  sm: "300px",
                  xs: "200px",
                },
                border: `5px outset ${Colors.Grey.ultraLight}`,
                borderRadius: "7px",
                mb: "20px",
              }}
            />
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ExperienceGallery;
