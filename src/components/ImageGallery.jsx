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
    <Box
      sx={{
        my: "40px",
        background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${Colors.Grey.light})`,
        borderRadius: "22px",
        p: "10px",
      }}
    >
      <Typography
        component="h6"
        sx={{
          color: theme.palette.secondary.main,
          textAlign: "center",
          fontSize: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        }}
      >
        {t("our_experience_work_demo")}
      </Typography>
      <Carousel autoPlay autoFocus infiniteLoop showStatus={false}>
        {workPhotos.map((photo) => {
          return (
            <Box>
              <Box
                key={photo.id}
                sx={{
                  background: `url(${photo.img})`,
                  backgroundSize: "cover",
                  height: {
                    xl: "1100px",
                    lg: "1000px",
                    md: "800px",
                    sm: "700px",
                    xs: "320px",
                  },
                  width: {
                    xl: "750px",
                    lg: "800px",
                    md: "650px",
                    sm: "500px",
                    xs: "220px",
                  },
                }}
              />
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default ExperienceGallery;
