import whyUsExperience from "../img/whyUs/whyUsExperience.jpeg";
import whyUsLevel from "../img/whyUs/whyUsLevel.jpg";
import whyUsUnique from "../img/whyUs/whyUsUnique.jpg"
import StarIcon from '@mui/icons-material/Star';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConstructionIcon from '@mui/icons-material/Construction';

const reasons = [
  {
    id: `1`,
    img: whyUsExperience,
    icon: ConstructionIcon,
    name: `Опыт`,
    text: `why_us_reason_one`,
  },
  {
    id: `2`,
    img: whyUsLevel,
    icon: EngineeringIcon,
    name: `Уровень`,
    text: `why_us_reason_two`,
  },
  {
    id: `3`,
    img: whyUsUnique,
    icon: StarIcon,
    name: `Подход`,
    text: `why_us_reason_three`,
  },
];

export default reasons;
