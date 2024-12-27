export type SelectedParts = Record<
  | "skin"
  | "hair"
  | "eyebrow"
  | "eye"
  | "nose"
  | "mouth"
  | "shirt"
  | "clothes"
  | "pant"
  | "shoes",
  string | null
>;

export interface ModelProps {
  selectedParts: SelectedParts;
}

export default function Model({ selectedParts }: ModelProps) {
  const zIndexMap: Record<string, number> = {
    skin: 1,
    pant: 2,
    shirt: 3,
    clothes: 4,
    shoes: 5,
    nose: 6,
    mouth: 7,
    eye: 8,
    eyebrow: 9,
    hair: 10,
    dress: 11
  };

  return (
    <div className="relative h-80 w-60">
      {Object.keys(selectedParts).map((partKey) => {
        const imageSrc = selectedParts[partKey as keyof SelectedParts];

        if (!imageSrc) return null;

        return (
          <div
            key={partKey}
            className="part-container"
            style={{ zIndex: zIndexMap[partKey] }}
          >
            <img className="part-img" src={imageSrc} alt={partKey} />
          </div>
        );
      })}
      <style jsx>{`
        .part-container {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        .part-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}
