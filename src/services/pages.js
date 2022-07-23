import zikLogoBlue from "../img/logos/zikLogoBlue.jpg";
import zikLogoRed from "../img/logos/zikLogoRed.jpg";
import zikLogoGreen from "../img/logos/zikLogoGreen.jpg";

import constructionButton from "../img/homePage/constructionButton.jpeg";
import elevatorsButton from "../img/homePage/elevatorsButton.jpg"
import housingButton from "../img/homePage/housingButton.jpg"


const pages = [
  {
    id: "1",
    name: "title_construction_and_assembly",
    to: "/construct",
    img: zikLogoRed,
    color: "#ac0717",
    background: constructionButton,
  },
  {
    id: "2",
    name: `title_elevator_selling_installation_and_maintenance`,
    to: "/elevator",
    img: zikLogoBlue,
    color: "#005b84",
    background: elevatorsButton,
  },
  {
    id: "3",
    name: `title_commercial_facilities_maintenance`,
    to: "/facility",
    img: zikLogoGreen,
    color: "#44b651",
    background: housingButton,
  },
];

export default pages;
