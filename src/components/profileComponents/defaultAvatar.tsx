import { AvatarParts } from "./profileType";

export const defaultAvatar: AvatarParts = {
  skin: "/model/skin/skin1.webp",
  hair: "/model/hair/hair1.webp",
  eyebrow: "/model/eyebrow/eyebrow1.webp",
  eye: "/model/eye/eye1.webp",
  nose: "/model/nose/nose1.webp",
  mouth: "/model/mouth/mouth1.webp",
  shirt: "/model/shirt/shirt1.webp",
  clothes: "/model/clothes/clothes1.webp",
  pant: "/model/pant/pant1.webp",
  shoes: "/model/shoes/shoes1.webp",
};

export type element = {
  id: string;
  imageSrc: string;
  isLocked: boolean;
  colors: number;
};

export type item = element[];
