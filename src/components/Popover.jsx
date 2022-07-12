import * as React from "react";

import { Popover, Typography, Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import { theme } from "../config/color-config";

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

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick} width="30px">
        <LanguageIcon
          sx={{
            color: theme.palette.primary.dark,
            width: "35px",
            height: "35px",
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
    </div>
  );
}
