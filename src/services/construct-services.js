import constructionLevel from "../img/backgrounds/constructionLevel.jpeg"
import constructionSite2 from "../img/backgrounds/constructionSite2.jpeg"
import constructionSite3 from "../img/backgrounds/constructionSite3.jpeg"


const servicesTypes = [
  {
    id: `1`,
    serviceName: `Проектирование`,
    serviceDescription: `Подготовка эскизной, рабочей документации для строительства, капитального ремонта, реконструкции.`,
    img: constructionLevel,
  },
  {
    id: `2`,
    serviceName: `Строительство`,
    serviceDescription: `Мы выполняем любые общестроительные работы: заливка фундаментов, возведение стен (по каркасной, монолитной технологии, из бруса, кирпича, строительных блоков), устройства перекрытий, кровли, отделка фасада`,
    img: constructionSite2,
  },
  {
    id: `3`,
    serviceName: `Ремонт, отделка`,
    serviceDescription: `Работы выполняются для жилых комплексов (многоквартирные дома, частные дома, загородные дома, квартиры), коммерческих объектов (офисы, торговые центры, бизнес-центры)`,
    img: constructionSite3,
  },
];

export default servicesTypes;