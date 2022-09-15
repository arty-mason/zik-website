import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import React, { useLayoutEffect } from "react";

const Wrapper = (props) => {
  const { renderHeader, renderFooter, children } = props;

  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

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
      {renderFooter && renderFooter()}
    </Box>
  );
};

export default Wrapper;
