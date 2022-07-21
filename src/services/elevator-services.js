import gridProjecting from "../img/elevatorPage/grid/gridProjecting.jpg"
import gridMounting from "../img/elevatorPage/grid/gridMounting.png";
import gridModernize from "../img/elevatorPage/grid/gridModernize.jpg";
import gridMonitoring from "../img/elevatorPage/grid/gridMonitoring.jpg"
import gridServicing from "../img/elevatorPage/grid/gridServicing.jpg"
import gridParts from "../img/elevatorPage/grid/gridParts.jpg"

const elevatorServices = [
  {
    id: `1`,
    name: `Продажа лифтов, проектирование лифтового оборудования`,
    alt: `Designing elevators`,
    img: gridProjecting,
  },
  {
    id: `2`,
    name: `Монтаж лифтов и других подъемных механизмов`,
    alt: `Elevator Installation`,
    img: gridMounting,
  },
  {
    id: `3`,
    name: `Полная модернизация лифтов`,
    alt: `Elevator Modernization`,
    img: gridModernize,
  },
  {
    id: `4`,
    name: `Автоматизация и диспетчеризация`,
    alt: `Elevator Automatization`,
    img: gridMonitoring,
  },
  {
    id: `5`,
    name: `Комплексное техническое обслуживание`,
    alt: `Elevator Service`,
    img: gridServicing,
  },
  {
    id: `6`,
    name: `Продажа запчастей и комплектующих`,
    alt: `Elevator Parts`,
    img: gridParts,
  },
];

export default elevatorServices;
