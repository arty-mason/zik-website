import zikLogoBlue from "../img/logos/zikLogoBlue.jpg";
import zikLogoRed from "../img/logos/zikLogoRed.jpg";
import zikLogoGreen from "../img/logos/zikLogoGreen.jpg";

import constructionButton from "../img/homePage/constructionButton.jpeg";
import elevatorsButton from "../img/homePage/elevatorsButton.jpg"
import housingButton from "../img/homePage/housingButton.jpg"


const pages = [
  {
    id: "1",
    name: "content_construction_and_assembly",
    to: "/construct",
    img: zikLogoRed,
    color: "#ac0717",
    background: constructionButton,
  },
  {
    id: "2",
    name: `Продажа, монтаж и обслуживание лифтов`,
    to: "/elevator",
    img: zikLogoBlue,
    color: "#005b84",
    background: elevatorsButton,
  },
  {
    id: "3",
    name: `Обслуживание коммерческих объектов и жилых домов`,
    to: "/facility",
    img: zikLogoGreen,
    color: "#44b651",
    background: housingButton,
  },
];

export default pages;
