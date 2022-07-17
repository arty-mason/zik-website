import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { footerContent } from "../services/footer-content";
import { theme } from "../config/color-config";

const LeftPopper = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  return (
    <Box sx={{ width: 500 }}>
      {footerContent.map((content) => {
        return (
          <Box>
            <Popper
              key={content.id}
              open={open}
              anchorEl={anchorEl}
              placement={placement}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography sx={{ p: 2 }}>
                     {content.info}
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>

            <Box>
              <Box
                sx={{
                  m: "5px",
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleClick("top")}
                >
                  <Typography
                    sx={{
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {content.name}
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default LeftPopper;
