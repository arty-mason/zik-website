import { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Routes, Route, Navigate } from "react-router-dom";
import { logAnalyticsEvent } from "./services/firebase";

import { theme } from "./config/color-config";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhyUs from "./pages/WhyUs";
import OurExperience from "./pages/OurExperience";
import ConstructAndInstall from "./pages/ConstructAndInstall";
import ElevatorInstall from "./pages/ElevatorInstall";
import FacilityService from "./pages/FacilityService";

function App() {
  useEffect(() => {
    logAnalyticsEvent("Page rendered");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          html: {
            height: "100vh",
            backgroundColor: "#fafafa",
          },
          body: {
            height: "100%",
            margin: "0",
            padding: "0",
          },
          "#root": {
            height: "100%",
          },
        }}
      />
      <Wrapper renderHeader={() => <NavBar />} renderFooter={() => <Footer />}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="why" element={<WhyUs />} />
          <Route path="experience" element={<OurExperience />} />
          <Route path="construct" element={<ConstructAndInstall />} />
          <Route path="elevator" element={<ElevatorInstall />} />
          <Route path="facility" element={<FacilityService />} />
          <Route path="*" element={<Navigate to="home" replace={true} />} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
