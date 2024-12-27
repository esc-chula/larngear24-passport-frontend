import { item } from "./defaultAvatar";

const skin = Array.from({ length: 8 }, (_, i) => ({
  id: `skin${i + 1}`,
  imageSrc: `/model/skin/skin${i + 1}.webp`,
  isLocked: false,
  colors: 1,
}));

const shoes = Array.from({ length: 10 }, (_, i) => ({
  id: `shoes${i + 1}`,
  imageSrc: `/model/shoes/shoes${i + 1}.webp`,
  isLocked: false,
  colors: 1,
}));

const shirt = [
  {
    id: "shirt1",
    imageSrc: "/model/shirt/shirt1.webp",
    isLocked: false,
    colors: 4,
  },
  {
    id: "shirt2",
    imageSrc: "/model/shirt/shirt2.webp",
    isLocked: false,
    colors: 3,
  },
  {
    id: "shirt3",
    imageSrc: "/model/shirt/shirt3.webp",
    isLocked: false,
    colors: 3,
  },
  {
    id: "shirt4",
    imageSrc: "/model/shirt/shirt4.webp",
    isLocked: false,
    colors: 3,
  },
  {
    id: "shirt5",
    imageSrc: "/model/shirt/shirt5.webp",
    isLocked: false,
    colors: 4,
  },
  {
    id: "shirt6",
    imageSrc: "/model/shirt/shirt6.webp",
    isLocked: false,
    colors: 2,
  },
  {
    id: "shirt7",
    imageSrc: "/model/shirt/shirt7.webp",
    isLocked: false,
    colors: 2,
  },
  {
    id: "shirt8",
    imageSrc: "/model/shirt/shirt8.webp",
    isLocked: false,
    colors: 4,
  },
  {
    id: "shirt9",
    imageSrc: "/model/shirt/shirt9.webp",
    isLocked: false,
    colors: 4,
  },
];

const pant = [
  {
    id: "pant1",
    imageSrc: "/model/pant/pant1.webp",
    isLocked: false,
    colors: 1,
  },
  {
    id: "pant2",
    imageSrc: "/model/pant/pant2.webp",
    isLocked: false,
    colors: 1,
  },
  {
    id: "pant3",
    imageSrc: "/model/pant/pant3.webp",
    isLocked: false,
    colors: 1,
  },
  {
    id: "pant4",
    imageSrc: "/model/pant/pant4.webp",
    isLocked: false,
    colors: 3,
  },
  {
    id: "pant5",
    imageSrc: "/model/pant/pant5.webp",
    isLocked: false,
    colors: 2,
  },
  {
    id: "pant6",
    imageSrc: "/model/pant/pant6.webp",
    isLocked: false,
    colors: 1,
  },
  {
    id: "pant7",
    imageSrc: "/model/pant/pant7.webp",
    isLocked: false,
    colors: 2,
  },
  {
    id: "pant8",
    imageSrc: "/model/pant/pant8.webp",
    isLocked: false,
    colors: 1,
  },
];

const nose = Array.from({ length: 6 }, (_, i) => ({
  id: `nose${i + 1}`,
  imageSrc: `/model/nose/nose${i + 1}.webp`,
  isLocked: false,
  colors: 1,
}));

const mouth = Array.from({ length: 13 }, (_, i) => ({
  id: `mouth${i + 1}`,
  imageSrc: `/model/mouth/mouth${i + 1}.webp`,
  isLocked: false,
  colors: 1,
}));

const hair = Array.from({ length: 11 }, (_, i) => ({
  id: `hair${i + 1}`,
  imageSrc: `/model/hair/hair${i + 1}.webp`,
  isLocked: false,
  colors: i == 5 ? 12 : 11,
}));

const eyebrow = [
  {
    id: "eyebrow1",
    imageSrc: "/model/eyebrow/eyebrow1.webp",
    isLocked: false,
    colors: 11,
  },
  {
    id: "eyebrow2",
    imageSrc: "/model/eyebrow/eyebrow2.webp",
    isLocked: false,
    colors: 1,
  },
  {
    id: "eyebrow3",
    imageSrc: "/model/eyebrow/eyebrow3.webp",
    isLocked: false,
    colors: 1,
  },
  {
    id: "eyebrow4",
    imageSrc: "/model/eyebrow/eyebrow4.webp",
    isLocked: false,
    colors: 1,
  },
  {
    id: "eyebrow5",
    imageSrc: "/model/eyebrow/eyebrow5.webp",
    isLocked: false,
    colors: 1,
  },
  {
    id: "eyebrow6",
    imageSrc: "/model/eyebrow/eyebrow6.webp",
    isLocked: false,
    colors: 1,
  },
];

const eye = Array.from({ length: 19 }, (_, i) => ({
  id: `eye${i + 1}`,
  imageSrc: `/model/eye/eye${i + 1}.webp`,
  isLocked: false,
  colors: i < 9 ? 11 : 1,
}));

const clothes = Array.from({ length: 12 }, (_, i) => ({
  id: `clothes${i + 1}`,
  imageSrc: `/model/clothes/clothes${i + 1}.webp`,
  isLocked: false,
  colors: 1,
}));

const dress = Array.from({ length: 11 }, (_, i) => ({
  id: `dress${i + 1}`,
  imageSrc: `/model/dress/dress${i + 1}.webp`,
  isLocked: false,
  colors: 1,
}));

export const items: Record<string, item> = {
  skin: skin,
  shoes: shoes,
  shirt: shirt,
  pant: pant,
  nose: nose,
  mouth: mouth,
  hair: hair,
  eyebrow: eyebrow,
  eye: eye,
  clothes: clothes,
  dress: dress
};
