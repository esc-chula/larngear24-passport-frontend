// src/data/items.ts
export type Item = {
  id: number;
  name: string;
  unlocked: boolean;
  description: string;
  image: string; // Path to the item's image
};

export const items: Item[] = [
  {
    id: 1,
    name: "Item 1",
    unlocked: true,
    description: "blah blah blah",
    image: "/images/unlock_1.png",
  },
  {
    id: 2,
    name: "Item 2",
    unlocked: false,
    description: "bruh bruh",
    image: "/images/lock_1.png",
  }
];