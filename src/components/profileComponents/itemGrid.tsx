import type { Item } from "./profileType";
import Image from "next/image";

export default function ItemsGrid({
  items,
  handleArtifactChange,
  isSelectedArtifact,
}: {
  items: Item[];
  handleArtifactChange: (artifact: string) => void;
  isSelectedArtifact: (artifact: string) => number;
}) {
  const handleClick = (item: Item) => {
    if (item.isLocked) return;
    handleArtifactChange(item.id);
  };
  return (
    <div
      className="grid h-72 w-full grid-cols-3 justify-center justify-items-center bg-[#ECF0F6]/80"
      style={{
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
        overflowY: "scroll",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative mx-2 my-2.5 flex h-28 w-24 cursor-pointer flex-col items-center justify-center bg-[#36465F] ${isSelectedArtifact(item.id) !== -1 ? "border-4 border-pink-500" : "border border-transparent"}`}
          style={{ minHeight: "100px" }}
          onClick={() => handleClick(item)}
        >
          {isSelectedArtifact(item.id) !== -1 && (
            <div className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full font-sans text-lg font-bold text-[#ECF0F6]">
              {isSelectedArtifact(item.id) + 1}
            </div>
          )}

          {item.isLocked ? (
            <Image
              src="/profile/locked.webp"
              alt="Locked"
              className="h-[30%] w-[30%] object-contain"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src={`/images/item${item.id}.webp`}
              alt={`Item ${item.id}`}
              className="object-contain"
              width={100}
              height={100}
            />
          )}
        </div>
      ))}
    </div>
  );
}
