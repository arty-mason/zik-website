import constructProjecting from "../img/construction/constructProjecting.jpeg";
import constructBuilding from "../img/construction/constructBuilding.jpeg";
import constructRepairing from "../img/construction/constructRepairing.jpeg";


const servicesTypes = [
  {
    id: `1`,
    serviceName: `Проектирование`,
    serviceDescription: `Подготовка эскизной, рабочей документации для строительства, капитального ремонта, реконструкции.`,
    img: constructProjecting,
  },
  {
    id: `2`,
    serviceName: `Строительство`,
    serviceDescription: `Мы выполняем любые общестроительные работы: заливка фундаментов, возведение стен (по каркасной, монолитной технологии, из бруса, кирпича, строительных блоков), устройства перекрытий, кровли, отделка фасада`,
    img: constructBuilding,
  },
  {
    id: `3`,
    serviceName: `Ремонт, отделка`,
    serviceDescription: `Работы выполняются для жилых комплексов (многоквартирные дома, частные дома, загородные дома, квартиры), коммерческих объектов (офисы, торговые центры, бизнес-центры)`,
    img: constructRepairing,
  },
];

export default servicesTypes;