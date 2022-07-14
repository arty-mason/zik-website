import builderProjecting from "../img/construction/builderProjecting.png"
import builderConstructing from "../img/construction/builderConstructing.png"
import buildersPainting from "../img/construction/buildersPainting.png"


const servicesTypes = [
  {
    id: `1`,
    serviceName: `Проектирование`,
    serviceDescription: `Подготовка эскизной, рабочей документации для строительства, капитального ремонта, реконструкции.`,
    img: builderProjecting,
  },
  {
    id: `2`,
    serviceName: `Строительство`,
    serviceDescription: `Мы выполняем любые общестроительные работы: заливка фундаментов, возведение стен (по каркасной, монолитной технологии, из бруса, кирпича, строительных блоков), устройства перекрытий, кровли, отделка фасада`,
    img: builderConstructing,
  },
  {
    id: `3`,
    serviceName: `Ремонт, отделка`,
    serviceDescription: `Работы выполняются для жилых комплексов (многоквартирные дома, частные дома, загородные дома, квартиры), коммерческих объектов (офисы, торговые центры, бизнес-центры)`,
    img: buildersPainting,
  },
];

export default servicesTypes;