export type Item = {
  id: number;
  name: string;
  unlocked: boolean;
  description: string;
  image: string; 
};

export const items: Item[] = [
  {
    id: 1,
    name: "Unlocked Item 1",
    image: "/images/item1.png",
    description: "This is the description for Unlocked Item 1.",
    unlocked: true,
  },
  {
    id: 2,
    name: "Unlocked Item 2",
    image: "/images/item2.png",
    description: "This is the description for Unlocked Item 2.",
    unlocked: true,
  },
  {
    id: 3,
    name: "Unlocked Item 3",
    image: "/images/item3.png",
    description: "This is the description for Unlocked Item 3.",
    unlocked: true,
  },
  {
    id: 4,
    name: "Locked Item 4",
    image: "/images/item4.png",
    description: "This item is locked.",
    unlocked: true,
  },
  {
    id: 5,
    name: "Locked Item 5",
    image: "/images/item5.png",
    description: "This item is locked.",
    unlocked: true,
  },
  {
    id: 6,
    name: "Locked Item 6",
    image: "/images/item6.png",
    description: "This item is locked.",
    unlocked: false,
  },
  {
    id: 7,
    name: "Locked Item 7",
    image: "/images/item7.png",
    description: "This item is locked.",
    unlocked: false,
  },
  {
    id: 8,
    name: "Locked Item 8",
    image: "/images/item8.png",
    description: "This item is locked.",
    unlocked: false,
  },
  {
    id: 9,
    name: "Locked Item 9",
    image: "/images/item9.png",
    description: "This item is locked.",
    unlocked: false,
  },
  {
    id: 9,
    name: "Locked Item 10",
    image: "/images/item10.png",
    description: "This item is locked.",
    unlocked: false,
  },
  {
    id: 10,
    name: "Locked Item 11",
    image: "/images/item11.png",
    description: "This item is locked.",
    unlocked: false,
  },
];