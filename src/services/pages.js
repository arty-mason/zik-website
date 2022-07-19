/* import zikLogoBlue from "../img/zikLogoBlue.jpg";
import zikLogoRed from "../img/zikLogoRed.jpg";
import zikLogoGreen from "../img/zikLogoGreen.jpg"; */
import constructLink from "../img/homepage/constructLink.jpeg";
import elevatorLink from "../img/homepage/elevatorLink.jpeg";
import serviceLink from "../img/homepage/serviceLink.jpeg"

const pages = [
  {
    id: "1",
    name: `Строительно-монтажные работы`,
    to: "/construct",
    /*     img: zikLogoRed, */
    color: "#ac0717",
    background: constructLink,
  },
  {
    id: "2",
    name: `Продажа, монтаж и обслуживание лифтов`,
    to: "/elevator",
    /*   img: zikLogoBlue, */
    color: "#005b84",
    background: elevatorLink,
  },
  {
    id: "3",
    name: `Обслуживание коммерческих объектов и жилых домов`,
    to: "/facility",
    /*   img: zikLogoGreen, */
    color: "#44b651",
    background: serviceLink,
  },
];

export default pages;
