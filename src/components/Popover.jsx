import * as React from "react";

import { Popover, Typography, Button, Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import { usePageTheme } from "../services/page-theme.hook";

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { colors } = usePageTheme();

  return (
    <Box>
      <Button aria-describedby={id} onClick={handleClick} width="30px">
        <LanguageIcon
          sx={{
            color: colors.primary,
            width: "35px",
            height: "35px",
            "&:hover": {
              color: colors.secondary,
              textDecoration: "underline",
            },
          }}
        />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          {props.children}
        </Typography>
      </Popover>
    </Box>
  );
}
