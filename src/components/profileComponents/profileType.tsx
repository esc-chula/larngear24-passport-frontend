export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  items: {
    id: string;
    name: string;
    isLocked: boolean;
  }[];
  handleArtifactChange: (artifact: string) => void;
  isSelectedArtifact: (artifact: string) => number;
};

export type Item = {
  id: string;
  name: string;
  isLocked: boolean;
};

export type AvatarParts = {
  skin: string | null;
  hair: string | null;
  eyebrow: string | null;
  eye: string | null;
  nose: string | null;
  mouth: string | null;
  shirt: string | null;
  clothes: string | null;
  pant: string | null;
  shoes: string | null;
  dress: string | null;
};

export type Artifacts = (string | null)[];
