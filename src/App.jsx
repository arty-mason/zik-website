import { ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import { theme } from "./config/palette";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate to="home" replace={true} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
