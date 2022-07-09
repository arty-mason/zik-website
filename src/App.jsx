import { ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import { theme } from "./config/palette";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import ConstructAndInstall from "./pages/ConstructAndInstall";
import ElevatorInstall from "./pages/ElevatorInstall";
import FacilityService from "./pages/FacilityService";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="construct" element={<ConstructAndInstall />} />
        <Route path="elevator" element={<ElevatorInstall />} />
        <Route path="facility" element={<FacilityService />} />
        <Route path="*" element={<Navigate to="home" replace={true} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
