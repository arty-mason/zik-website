import projectingImg from "../img/constructionPage/projectingImg.jpeg";
import constructionImg from "../img/constructionPage/constructionImg.jpeg";
import repairImg from "../img/constructionPage/repairImg.jpg";

const servicesTypes = [
  {
    id: `1`,
    serviceName: `Проектирование`,
    serviceDescription: `Подготовка эскизной, рабочей документации для строительства, капитального ремонта, реконструкции.`,
    img: projectingImg,
  },
  {
    id: `2`,
    serviceName: `Строительство`,
    serviceDescription: `Мы выполняем любые общестроительные работы: заливка фундаментов, возведение стен (по каркасной, монолитной технологии, из бруса, кирпича, строительных блоков), устройства перекрытий, кровли, отделка фасада`,
    img: constructionImg
  },
  {
    id: `3`,
    serviceName: `Ремонт, отделка`,
    serviceDescription: `Работы выполняются для жилых комплексов (многоквартирные дома, частные дома, загородные дома, квартиры), коммерческих объектов (офисы, торговые центры, бизнес-центры)`,
    img: repairImg,
  },
];

export default servicesTypes;