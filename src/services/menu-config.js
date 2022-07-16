export const menuConfig = [
  {
    id: "1",
    name: "О нас",
    link: "/about",
  },
  {
    id: "2",
    name: "Почему выбирают нас",
    link: "/why",
  },
  {
    id: "3",
    name: "Наш опыт",
    link: "/experience",
  },
  {
    id: "4",
    name: "Уcлуги",
    link: null,
    subItems: [
      {
        id: "6",
        name: "Строительно-монтажные работы",
        link: "/construct",
      },
      {
        id: "7",
        name: "Продажа, монтаж и обслуживание лифтов",
        link: "/elevator",
      },
      {
        id: "8",
        name: "Обслуживание коммерческих объектов и жилых домов",
        link: "facility",
      },
    ],
  },
];
