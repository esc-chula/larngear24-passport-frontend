import type { element, item } from "./defaultAvatar";

export default function ItemsGrid({
  items,
  activeTab,
  activeItemId,
  setActiveItemId,
  handlePartSelection,
}: {
  items: Record<string, item>;
  activeTab: string;
  activeItemId: string | null;
  setActiveItemId: (tab: string | null) => void;
  handlePartSelection: (part: string, id: string) => void;
}) {
  const displayedItems = (() => {
    if (!activeItemId) {
      return items[activeTab];
    }

    const activeItem = items[activeTab]?.find(
      (item) => item.id === activeItemId,
    );

    if (activeItem && activeItem.colors > 1) {
      return Array.from({ length: activeItem.colors }, (_, index) => ({
        ...activeItem,
        id: `${activeItem.id}-${index + 1}`,
        imageSrc: `/model/${activeTab}/${activeItem.id}/${activeItem.id}-${index + 1}.webp`,
      }));
    }

    return items[activeTab];
  })();

  const handleClickItem = (id: string, imgSrc: string, isLocked: boolean) => {
    if(isLocked) return;
    setActiveItemId(id);
    handlePartSelection(activeTab, imgSrc);
  };

  return (
    <div
      className="grid h-60 w-full grid-cols-3 justify-center justify-items-center rounded-b-lg bg-[#ECF0F6]/80"
      style={{
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
        overflowY: "scroll",
      }}
    >
      {displayedItems?.map((item: element) => (
        <div
          key={item.id}
          className={`mx-2 my-2.5 flex h-14 w-24 cursor-pointer flex-col items-center justify-center rounded-lg bg-[#36465F]/30`}
          style={{ minHeight: "100px" }}
          onClick={() => handleClickItem(item.id, item.imageSrc, item.isLocked)}
        >
          {/* Render image */}
          {item.isLocked ? (
            <img
              src="/profile/locked.webp"
              alt="Locked"
              className="h-[30%] w-[30%] object-contain"
            />
          ) : (
            <img
              src={item.imageSrc.replace("/model", "/model/full-scale")}
              alt={`Item ${item.id}`}
              className="h-[80%] w-[80%] object-contain"
            />
          )}
        </div>
      ))}
    </div>
  );
}
