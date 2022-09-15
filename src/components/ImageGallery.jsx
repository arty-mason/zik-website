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
        py: "30px",
        px: { lg: "150px", md: "100px", sm: "75px", xs: "50px" },
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
      <Carousel autoPlay infiniteLoop showStatus={false}>
        {workPhotos.map((photo) => {
          return (
            <Box>
              <Box
                key={photo.id}
                sx={{
                  background: `url(${photo.img})`,
                  backgroundSize: "cover",
                  height: {
                    lg: "800px",
                    md: "700px",
                    sm: "600px",
                    xs: "250px",
                  },
                  width: {
                    lg: "600px",
                    md: "500px",
                    sm: "500px",
                    xs: "150px",
                  },
                  border: `5px outset ${Colors.Grey.ultraLight}`,
                  borderRadius: "7px",
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
