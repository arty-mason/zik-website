import zikLogoBlue from "../img/zikLogoBlue.jpg";
import zikLogoRed from "../img/zikLogoRed.jpg";
import zikLogoGreen from "../img/zikLogoGreen.jpg";
import constructionSite2 from "../img/backgrounds/constructionSite2.jpeg"
import elevatorsBackground5 from "../img/backgrounds/elevatorsBackground5.jpg"
import cleaningService from "../img/backgrounds/cleaningService.jpg";

const pages = [
  {
    id: "1",
    name: `Строительно-монтажные работы`,
    to: "/construct",
    img: zikLogoRed,
    color: "#ac0717",
    background: constructionSite2,
  },
  {
    id: "2",
    name: `Продажа, монтаж и обслуживание лифтов`,
    to: "/elevator",
    img: zikLogoBlue,
    color: "#005b84",
    background: elevatorsBackground5,
  },
  {
    id: "3",
    name: `Обслуживание коммерческих объектов и жилых домов`,
    to: "/facility",
    img: zikLogoGreen,
    color: "#44b651",
    background: cleaningService,
  },
];

export default pages;
