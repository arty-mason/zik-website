import { Box } from "@mui/material";
import React from "react";

const Wrapper = (props) => {
  const { renderHeader, renderFooter, children } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {renderHeader && renderHeader()}

        <Box
          component="main"
          sx={{
            /*   maxWidth: "1920px", */
            marginTop: "120px",
          }}
        >
          {children}
        </Box>
      </Box>
      {renderHeader && renderFooter()}
    </Box>
  );
};

export default Wrapper;
