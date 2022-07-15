import { ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import { theme } from "./config/color-config";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ConstructAndInstall from "./pages/ConstructAndInstall";
import ElevatorInstall from "./pages/ElevatorInstall";
import FacilityService from "./pages/FacilityService";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <NavBar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="construct" element={<ConstructAndInstall />} />
          <Route path="elevator" element={<ElevatorInstall />} />
          <Route path="facility" element={<FacilityService />} />
          <Route path="*" element={<Navigate to="home" replace={true} />} />
        </Routes>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
