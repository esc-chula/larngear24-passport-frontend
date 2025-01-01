export default function Tabs({
  activeTab,
  handleChangeTab,
}: {
  activeTab: string;
  handleChangeTab: (tab: string) => void;
}) {
  const tabs = [
    { id: "skin", label: "ร่างกาย" },
    { id: "dress", label: "หัว" },
    { id: "hair", label: "ผม" },
    { id: "eyebrow", label: "คิ้ว" },
    { id: "eye", label: "ตา" },
    { id: "nose", label: "จมูก" },
    { id: "mouth", label: "ปาก" },
    { id: "shirt", label: "เสื้อ" },
    { id: "clothes", label: "เสื้อคลุม" },
    { id: "pant", label: "กางเกง" },
    { id: "shoes", label: "รองเท้า" },
  ];

  return (
    <div
      className="flex h-10 items-center justify-start gap-3 overflow-x-auto rounded-t-lg bg-[#36465F] px-1.5"
      style={{
        WebkitOverflowScrolling: "touch",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        cursor: "grab",
      }}
      onMouseDown={(e) => {
        const container = e.currentTarget;
        let isDown = true;
        const startX = e.pageX - container.offsetLeft;
        const scrollLeft = container.scrollLeft;

        container.style.cursor = "grabbing";

        const handleMouseMove = (moveEvent: MouseEvent) => {
          if (!isDown) return;
          moveEvent.preventDefault();
          const x = moveEvent.pageX - container.offsetLeft;
          const walk = x - startX; // Distance scrolled
          container.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
          isDown = false;
          container.style.cursor = "grab";
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleChangeTab(tab.id)}
          className={`flex h-7 w-24 flex-shrink-0 items-center justify-center rounded-lg font-ibm font-medium ${
            activeTab === tab.id
              ? "bg-gradient-to-b from-[#ECEFF6] to-[#3B83A9] text-[#262D37]" // Style for active tab
              : "bg-gradient-to-b from-[#092B44] via-[#625B87] to-[#D2CAFF] text-white" // Style for inactive tab
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
