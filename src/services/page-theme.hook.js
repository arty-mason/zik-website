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
  secondary: "#fbaf1a",
}

const PathnameToColor = {
  "/home": DefaultColor,
  "/construct": {
    primary: "#ac0717",
    secondary: "#fbaf1a",
  },
  "/facility": {
    primary: "#44b651",
    secondary: "#fbaf1a",
  },
}



export const usePageTheme = () => {
  const { pathname } = useLocation();

  const logoSrc = PathnameToLogo[pathname] ?? DefaultLogo;
  const colors = PathnameToColor[pathname] ?? DefaultColor;

  return { logoSrc, colors };
};
