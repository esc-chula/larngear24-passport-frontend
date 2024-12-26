"use client";
import React, { useState } from "react";
import Header from "@/components/globalComponents/Header";
import Model from "@/components/profileComponents/model";
import Link from "next/link";

function Tabs({ activeTab, handleChangeTab }: { activeTab: string; handleChangeTab: (tab: string) => void }) {
  const tabs = [
    { id: "skin", label: "ร่างกาย" },
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
    className="flex gap-3 px-1.5 bg-[#36465F] justify-start items-center h-10 overflow-x-auto rounded-t-lg"
    style={{
      WebkitOverflowScrolling: "touch",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      cursor: "grab"  
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
          className={`w-20 h-7 flex flex-shrink-0 items-center justify-center rounded-lg font-medium
            ${activeTab === tab.id
              ? "bg-gradient-to-b from-[#ECEFF6] to-[#3B83A9] text-[#262D37]" // Style for active tab
              : "bg-gradient-to-b from-[#092B44] via-[#625B87] to-[#D2CAFF]  text-white " // Style for inactive tab
            }`}
        >
          {tab.label}
        </button>
      ))}
      
    </div>
  );
};

type element = {
  id: string;
  imageSrc: string;
  isLocked: boolean;
  colors: number;
}

type item = element[]


function ItemsGrid({ items, activeTab, activeItemId, setActiveItemId, handlePartSelection }: { items: Record<string, item>, activeTab: string,
  activeItemId: string|null, setActiveItemId: (tab:string|null) => void, handlePartSelection: (part:string, id:string) => void }) {

  const displayedItems = (() => {
    if (!activeItemId) {
      return items[activeTab];
    }

    const activeItem = items[activeTab]?.find((item) => item.id === activeItemId);

    if (activeItem && activeItem.colors > 1) {
      return Array.from({ length: activeItem.colors }, (_, index) => ({
        ...activeItem,
        id: `${activeItem.id}-${index + 1}`,
        imageSrc: `/model/${activeTab}/${activeItem.id}/${activeItem.id}-${index + 1}.webp`,
      }));
    }

    return items[activeTab];
  })();

  const handleClickItem = (id: string, imgSrc: string) => {
    setActiveItemId(id);
    handlePartSelection(activeTab, imgSrc);
  }

  return (
    <div className="grid grid-cols-3 w-full justify-center justify-items-center bg-[#ECF0F6]/80 h-60 rounded-b-lg"
        style={{
        overflow: "auto", 
        scrollbarWidth: "none", 
        msOverflowStyle: "none", 
        WebkitOverflowScrolling: "touch", 
        overflowY: "scroll"
      }}>
      {displayedItems?.map((item: element) => ( 
        <div 
          key={item.id}
          className={`flex flex-col items-center justify-center bg-[#36465F]/30 w-24 h-14 my-2.5 mx-2 cursor-pointer rounded-lg`}
          style={{ minHeight: "100px" }}
          onClick={() => handleClickItem(item.id, item.imageSrc)}
          >
          {/* Render image */}
          <img src={item.imageSrc} alt={`Item ${item.id}`} className="w-full h-full object-contain" />
        </div> 
      ))}
    </div>
  );
};

export default function Dress() {
  const [activeTab, setActiveTab] = useState("skin")

  const [activeItemId, setActiveItemId] = useState<string|null>(null)

  type AvatarParts = {
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
  };
  
  const [selectedParts, setSelectedParts] = useState<AvatarParts>(() => {
    const defaultAvatar: AvatarParts = {
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

    const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage && window;

    if(!isLocalStorageAvailable) return defaultAvatar;

    const savedAvatarString = localStorage.getItem("selectedParts"); 

    let savedAvatar: AvatarParts | null = null; 

    if (savedAvatarString) {
      try {
        savedAvatar = JSON.parse(savedAvatarString) as AvatarParts; 
      } catch (error) {
        return defaultAvatar;
      }
    }
  
    return savedAvatar ?? defaultAvatar;
  });

  const handlePartSelection = (part: string, imgSrc: string | null) => {
    setSelectedParts(prevState => {
      const updatedParts = { ...prevState, [part]: imgSrc };
      return updatedParts;
    });
  };

  const handleConfirm = () => {
    const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage && window;
    if(!isLocalStorageAvailable) return;
    localStorage.setItem("selectedParts", JSON.stringify(selectedParts));
  };

  const handleChangeTab = (tab:string) => {
    setActiveTab(tab)
    setActiveItemId(null)
  }

  const skin = Array.from({ length: 8 }, (_, i) => ({
    id: `skin${i + 1}`,
    imageSrc: `/model/skin/skin${i + 1}.webp`,
    isLocked: false,
    colors: 1
  }));

  const shoes = Array.from({ length: 10 }, (_, i) => ({
    id: `shoes${i + 1}`,
    imageSrc: `/model/shoes/shoes${i + 1}.webp`,
    isLocked: false,
    colors: 1
  }));

  const shirt = [
    { id: "shirt1", imageSrc: "/model/shirt/shirt1.webp", isLocked: false, colors: 4 },
    { id: "shirt2", imageSrc: "/model/shirt/shirt2.webp", isLocked: false, colors: 3},
    { id: "shirt3", imageSrc: "/model/shirt/shirt3.webp", isLocked: false, colors: 3},
    { id: "shirt4", imageSrc: "/model/shirt/shirt4.webp", isLocked: false, colors: 3},
    { id: "shirt5", imageSrc: "/model/shirt/shirt5.webp", isLocked: false, colors: 3},
    { id: "shirt6", imageSrc: "/model/shirt/shirt6.webp", isLocked: false, colors: 2},
    { id: "shirt7", imageSrc: "/model/shirt/shirt7.webp", isLocked: false, colors: 2},
    { id: "shirt8", imageSrc: "/model/shirt/shirt8.webp", isLocked: false, colors: 4},
    { id: "shirt9", imageSrc: "/model/shirt/shirt9.webp", isLocked: false, colors: 4},
  ]

  const pant = [
    { id: "pant1", imageSrc: "/model/pant/pant1.webp", isLocked: false, colors: 1 },
    { id: "pant2", imageSrc: "/model/pant/pant2.webp", isLocked: false, colors: 1 },
    { id: "pant3", imageSrc: "/model/pant/pant3.webp", isLocked: false, colors: 1 },
    { id: "pant4", imageSrc: "/model/pant/pant4.webp", isLocked: false, colors: 3 },
    { id: "pant5", imageSrc: "/model/pant/pant5.webp", isLocked: false, colors: 2 },
    { id: "pant6", imageSrc: "/model/pant/pant6.webp", isLocked: false, colors: 1 },
    { id: "pant7", imageSrc: "/model/pant/pant7.webp", isLocked: false, colors: 2 },
    { id: "pant8", imageSrc: "/model/pant/pant8.webp", isLocked: false, colors: 1 },
  ];

  const nose = Array.from({ length: 6 }, (_, i) => ({
    id: `nose${i + 1}`,
    imageSrc: `/model/nose/nose${i + 1}.webp`,
    isLocked: false,
    colors: 1
  }));

  const mouth = Array.from({ length: 13 }, (_, i) => ({
    id: `mouth${i + 1}`,
    imageSrc: `/model/mouth/mouth${i + 1}.webp`,
    isLocked: false,
    colors: 1
  }));

  const hair = Array.from({ length: 11 }, (_, i) => ({
    id: `hair${i + 1}`,
    imageSrc: `/model/hair/hair${i + 1}.webp`,
    isLocked: false,
    colors: 11,
  }));

  const eyebrow = [
    { id: "eyebrow1", imageSrc: "/model/eyebrow/eyebrow1.webp", isLocked: false, colors: 11 },
    { id: "eyebrow2", imageSrc: "/model/eyebrow/eyebrow2.webp", isLocked: false, colors: 1 },
    { id: "eyebrow3", imageSrc: "/model/eyebrow/eyebrow3.webp", isLocked: false, colors: 1 },
    { id: "eyebrow4", imageSrc: "/model/eyebrow/eyebrow4.webp", isLocked: false, colors: 1 },
    { id: "eyebrow5", imageSrc: "/model/eyebrow/eyebrow5.webp", isLocked: false, colors: 1 },
    { id: "eyebrow6", imageSrc: "/model/eyebrow/eyebrow6.webp", isLocked: false, colors: 1 },
  ];

  const eye = Array.from({ length: 19 }, (_, i) => ({
    id: `eye${i + 1}`,
    imageSrc: `/model/eye/eye${i + 1}.webp`,
    isLocked: false,
    colors: i < 9 ? 11 : 1
  }));

  const clothes = Array.from({ length: 12 }, (_, i) => ({
    id: `clothes${i + 1}`,
    imageSrc: `/model/clothes/clothes${i + 1}.webp`,
    isLocked: false,
    colors: 1
  }));

  const items: Record<string, item> = { 'skin': skin, 
    'shoes': shoes, 'shirt': shirt, 'pant': pant, 
    'nose': nose, 'mouth': mouth, 'hair': hair, 'eyebrow': eyebrow, 'eye': eye, 'clothes': clothes };
  

  return (
    <div className="relative flex flex-col h-full min-h-screen w-full gap-4 bg-[url('/profile/bg.webp')] md:mx-auto md:max-w-[25rem]">
        <Header />
        <div className="flex items-start mx-7">
          <Link href="/Profile">
            <img src="/arrow-left.webp" alt="Back" className="w-5"/>
          </Link>
        </div>

        <div className="flex justify-center items-center h-[40%]">
          <div className="bg-white/50 rounded-2xl w-11/12 h-64 flex justify-center items-center relative">
            <div className="w-[60%] h-[60%] flex justify-center items-center">
              <Model selectedParts={selectedParts} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-11/12 mx-4">
          <Tabs activeTab={activeTab} handleChangeTab={handleChangeTab}/>
          <ItemsGrid items={items} activeTab={activeTab} activeItemId={activeItemId} setActiveItemId={setActiveItemId} handlePartSelection={handlePartSelection}/>
        </div>

        <div className="flex flex-col h-full justify-center items-center">
          <button onClick={handleConfirm} className="bg-[#ECF0F6]/80 text-black w-24 rounded-lg font-bold">
            Confirm
          </button>
        </div>
    </div>
    );
}

