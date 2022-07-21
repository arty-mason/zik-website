import { useLocation } from "react-router-dom";

const DefaultLogo = require("../img/zikLogoBlue.jpg");

const PathnameToLogo = {
  "/home": DefaultLogo,
  "/construct": require("../img/zikLogoRed.jpg"),
  "/facility": require("../img/zikLogoGreen.jpg"),
  ///Importing logo from the folder
};

const DefaultColor = {
  primary: "#005b84",
  primaryLight: "#4888b4",
  primaryDark: "#003257",
  secondary: "#fbaf1a",
  secondaryLight: "#ffe155",
  secondaryDark: "#c38000",

}

const PathnameToColor = {
  "/home": DefaultColor,
  "/construct": {
    primary: "#ac0717",
    primaryLight: "#e54a3f",
    primaryDark: "#750000",
    secondary: "#fbaf1a",
    secondaryLight: "#ffe155",
    secondaryDark: "#c38000",
  },
  "/facility": {
    primary: "#44b651",
    primaryLight: "#7ae980",
    primaryDark: "#008523",
    secondary: "#fbaf1a",
    secondaryLight: "#ffe155",
    secondaryDark: "#c38000",
  },
}

export const usePageTheme = () => {
  const { pathname } = useLocation();

  const logoSrc = PathnameToLogo[pathname] ?? DefaultLogo;
  const colors = PathnameToColor[pathname] ?? DefaultColor;

  return { logoSrc, colors };
};
