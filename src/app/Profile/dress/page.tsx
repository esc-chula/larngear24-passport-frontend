"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/globalComponents/Header";
import Link from "next/link";

function Tabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
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
      let startX = e.pageX - container.offsetLeft;
      let scrollLeft = container.scrollLeft;

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
          onClick={() => setActiveTab(tab.id)}
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
}

type item = element[]


function ItemsGrid({ items, activeTab }: { items: Record<string, item>, activeTab: string }) {

  return (
    <div className="grid grid-cols-3 w-full justify-center justify-items-center bg-[#ECF0F6]/80 h-60 rounded-b-lg"
        style={{
        overflow: "auto", 
        scrollbarWidth: "none", 
        msOverflowStyle: "none", 
        WebkitOverflowScrolling: "touch", 
        overflowY: "scroll", 
      }}>
      {items[activeTab] && items[activeTab].map((item: element) => ( 
        <div 
          key={item.id}
          className={`flex flex-col items-center justify-center bg-[#7D7D7D] w-24 h-10 my-2.5 mx-2`}
          style={{ minHeight: "100px" }}
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

  const [colors, setColors] = useState({
    hair: "black",
    skin: "black",
    eyes: "black",      
    eyebrows: "black",
  }); 

  useEffect(() => {
    const savedColors = localStorage.getItem("dressColors");
    if (savedColors) {
      setColors(JSON.parse(savedColors));
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("dressColors", JSON.stringify(colors));
  };

  const skin = [
    { id: "skin1", imageSrc: "/model/skin/skin1.webp", isLocked: false },
    { id: "skin2", imageSrc: "/model/skin/skin2.webp", isLocked: false },
    { id: "skin3", imageSrc: "/model/skin/skin3.webp", isLocked: false },
    { id: "skin4", imageSrc: "/model/skin/skin4.webp", isLocked: false },
    { id: "skin5", imageSrc: "/model/skin/skin5.webp", isLocked: false },
    { id: "skin6", imageSrc: "/model/skin/skin6.webp", isLocked: false },
    { id: "skin7", imageSrc: "/model/skin/skin7.webp", isLocked: false },
    { id: "skin8", imageSrc: "/model/skin/skin8.webp", isLocked: false },
  ]

  const shoes = [
    { id: "shoes1", imageSrc: "/model/shoes/shoes1.webp", isLocked: false },
    { id: "shoes2", imageSrc: "/model/shoes/shoes2.webp", isLocked: false },
    { id: "shoes3", imageSrc: "/model/shoes/shoes3.webp", isLocked: false },
    { id: "shoes4", imageSrc: "/model/shoes/shoes4.webp", isLocked: false },
    { id: "shoes5", imageSrc: "/model/shoes/shoes5.webp", isLocked: false },
    { id: "shoes6", imageSrc: "/model/shoes/shoes6.webp", isLocked: false },
    { id: "shoes7", imageSrc: "/model/shoes/shoes7.webp", isLocked: false },
    { id: "shoes8", imageSrc: "/model/shoes/shoes8.webp", isLocked: false },
    { id: "shoes9", imageSrc: "/model/shoes/shoes9.webp", isLocked: false },
    { id: "shoes10", imageSrc: "/model/shoes/shoes10.webp", isLocked: false },
  ]

  const shirt = [
    { id: "shirt1", imageSrc: "/model/shirt/shirts1.webp", isLocked: false },
    { id: "shirt2", imageSrc: "/model/shirt/shirts2.webp", isLocked: false },
    { id: "shirt3", imageSrc: "/model/shirt/shirts3.webp", isLocked: false },
    { id: "shirt4", imageSrc: "/model/shirt/shirts4.webp", isLocked: false },
    { id: "shirt5", imageSrc: "/model/shirt/shirts5.webp", isLocked: false },
    { id: "shirt6", imageSrc: "/model/shirt/shirts6.webp", isLocked: false },
    { id: "shirt7", imageSrc: "/model/shirt/shirts7.webp", isLocked: false },
    { id: "shirt8", imageSrc: "/model/shirt/shirts8.webp", isLocked: false },
    { id: "shirt9", imageSrc: "/model/shirt/shirts9.webp", isLocked: false },
  ]

  const pant = [
    { id: "pant1", imageSrc: "/model/pant/pant1.webp", isLocked: false },
    { id: "pant2", imageSrc: "/model/pant/pant2.webp", isLocked: false },
    { id: "pant3", imageSrc: "/model/pant/pant3.webp", isLocked: false },
    { id: "pant4", imageSrc: "/model/pant/pant4.webp", isLocked: false },
    { id: "pant5", imageSrc: "/model/pant/pant5.webp", isLocked: false },
    { id: "pant6", imageSrc: "/model/pant/pant6.webp", isLocked: false },
    { id: "pant7", imageSrc: "/model/pant/pant7.webp", isLocked: false },
    { id: "pant8", imageSrc: "/model/pant/pant8.webp", isLocked: false },
  ]

  const nose = [
    { id: "nose1", imageSrc: "/model/nose/nose1.webp", isLocked: false },
    { id: "nose2", imageSrc: "/model/nose/nose2.webp", isLocked: false },
    { id: "nose3", imageSrc: "/model/nose/nose3.webp", isLocked: false },
    { id: "nose4", imageSrc: "/model/nose/nose4.webp", isLocked: false },
    { id: "nose5", imageSrc: "/model/nose/nose5.webp", isLocked: false },
    { id: "nose6", imageSrc: "/model/nose/nose6.webp", isLocked: false },
  ]

  const mouth = [
    { id: "mouth1", imageSrc: "/model/mouth/mouth1.webp", isLocked: false },
    { id: "mouth2", imageSrc: "/model/mouth/mouth2.webp", isLocked: false },
    { id: "mouth3", imageSrc: "/model/mouth/mouth3.webp", isLocked: false },
    { id: "mouth4", imageSrc: "/model/mouth/mouth4.webp", isLocked: false },
    { id: "mouth5", imageSrc: "/model/mouth/mouth5.webp", isLocked: false },
    { id: "mouth6", imageSrc: "/model/mouth/mouth6.webp", isLocked: false },
    { id: "mouth7", imageSrc: "/model/mouth/mouth7.webp", isLocked: false },
    { id: "mouth8", imageSrc: "/model/mouth/mouth8.webp", isLocked: false },
    { id: "mouth9", imageSrc: "/model/mouth/mouth9.webp", isLocked: false },
    { id: "mouth10", imageSrc: "/model/mouth/mouth10.webp", isLocked: false },
    { id: "mouth11", imageSrc: "/model/mouth/mouth11.webp", isLocked: false },
    { id: "mouth12", imageSrc: "/model/mouth/mouth12.webp", isLocked: false },
    { id: "mouth13", imageSrc: "/model/mouth/mouth13.webp", isLocked: false },
  ]

  const hair = [
    { id: "hair1", imageSrc: "/model/hair/hair1.webp", isLocked: false },
    { id: "hair2", imageSrc: "/model/hair/hair2.webp", isLocked: false },
    { id: "hair3", imageSrc: "/model/hair/hair3.webp", isLocked: false },
    { id: "hair4", imageSrc: "/model/hair/hair4.webp", isLocked: false },
    { id: "hair5", imageSrc: "/model/hair/hair5.webp", isLocked: false },
    { id: "hair6", imageSrc: "/model/hair/hair6.webp", isLocked: false },
    { id: "hair7", imageSrc: "/model/hair/hair7.webp", isLocked: false },
    { id: "hair8", imageSrc: "/model/hair/hair8.webp", isLocked: false },
    { id: "hair9", imageSrc: "/model/hair/hair9.webp", isLocked: false },
    { id: "hair10", imageSrc: "/model/hair/hair10.webp", isLocked: false },
    { id: "hair11", imageSrc: "/model/hair/hair11.webp", isLocked: false },
  ]

  const eyebrow = [
    { id: "eyebrow1", imageSrc: "/model/eyebrow/eyebrow1.webp", isLocked: false },
    { id: "eyebrow2", imageSrc: "/model/eyebrow/eyebrow2.webp", isLocked: false },
    { id: "eyebrow3", imageSrc: "/model/eyebrow/eyebrow3.webp", isLocked: false },
    { id: "eyebrow4", imageSrc: "/model/eyebrow/eyebrow4.webp", isLocked: false },
    { id: "eyebrow5", imageSrc: "/model/eyebrow/eyebrow5.webp", isLocked: false },
    { id: "eyebrow6", imageSrc: "/model/eyebrow/eyebrow6.webp", isLocked: false },
  ]

  const eye = [
    { id: "eye1", imageSrc: "/model/eye/eye1.webp", isLocked: false },
    { id: "eye2", imageSrc: "/model/eye/eye2.webp", isLocked: false },
    { id: "eye3", imageSrc: "/model/eye/eye3.webp", isLocked: false },
    { id: "eye4", imageSrc: "/model/eye/eye4.webp", isLocked: false },
    { id: "eye5", imageSrc: "/model/eye/eye5.webp", isLocked: false },
    { id: "eye6", imageSrc: "/model/eye/eye6.webp", isLocked: false },
    { id: "eye7", imageSrc: "/model/eye/eye7.webp", isLocked: false },
    { id: "eye8", imageSrc: "/model/eye/eye8.webp", isLocked: false },
    { id: "eye9", imageSrc: "/model/eye/eye9.webp", isLocked: false },
    { id: "eye10", imageSrc: "/model/eye/eye10.webp", isLocked: false },
    { id: "eye11", imageSrc: "/model/eye/eye11.webp", isLocked: false },
    { id: "eye12", imageSrc: "/model/eye/eye12.webp", isLocked: false },
    { id: "eye13", imageSrc: "/model/eye/eye13.webp", isLocked: false },
    { id: "eye14", imageSrc: "/model/eye/eye14.webp", isLocked: false },
    { id: "eye15", imageSrc: "/model/eye/eye15.webp", isLocked: false },
    { id: "eye16", imageSrc: "/model/eye/eye16.webp", isLocked: false },
    { id: "eye17", imageSrc: "/model/eye/eye17.webp", isLocked: false },
    { id: "eye18", imageSrc: "/model/eye/eye18.webp", isLocked: false },
    { id: "eye19", imageSrc: "/model/eye/eye19.webp", isLocked: false },
  ]

  const clothes = [
    { id: "clothes1", imageSrc: "/model/clothes/clothes1.webp", isLocked: false },
    { id: "clothes2", imageSrc: "/model/clothes/clothes2.webp", isLocked: false },
    { id: "clothes3", imageSrc: "/model/clothes/clothes3.webp", isLocked: false },
    { id: "clothes4", imageSrc: "/model/clothes/clothes4.webp", isLocked: false },
    { id: "clothes5", imageSrc: "/model/clothes/clothes5.webp", isLocked: false },
    { id: "clothes6", imageSrc: "/model/clothes/clothes6.webp", isLocked: false },
    { id: "clothes7", imageSrc: "/model/clothes/clothes7.webp", isLocked: false },
    { id: "clothes8", imageSrc: "/model/clothes/clothes8.webp", isLocked: false },
    { id: "clothes9", imageSrc: "/model/clothes/clothes9.webp", isLocked: false },
    { id: "clothes10", imageSrc: "/model/clothes/clothes10.webp", isLocked: false },
    { id: "clothes11", imageSrc: "/model/clothes/clothes11.webp", isLocked: false },
    { id: "clothes12", imageSrc: "/model/clothes/clothes12.webp", isLocked: false },
  ]

  const items: Record<string, item> = { 'skin': skin, 
    'shoes': shoes, 'shirt': shirt, 'pant': pant, 
    'nose': nose, 'mouth': mouth, 'hair': hair, 'eyebrow': eyebrow, 'eye': eye, 'clothes': clothes };
  

  const updateColor = (color: string) => {
    console.log(activeTab);
    
    setColors((prevColors) => ({
      ...prevColors,
      [activeTab]: color,
    }));
  };

  return (
    <div className="relative flex flex-col h-full min-h-screen w-full gap-4 bg-[url('/profile/bg.webp')] md:mx-auto md:max-w-[25rem]">
        <Header />
        <div className="flex items-start mx-7">
          <Link href="/Profile">
            <img src="/arrow-left.webp" alt="Back" className="w-5"/>
          </Link>
        </div>

        <div className="flex justify-center h-[40%]">
          <div className="bg-white/50 rounded-2xl w-11/12 h-60 flex justify-center items-center">
            {/* dressing */}
            
          </div>
        </div>
        <div className="flex flex-col w-11/12 mx-4">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
          <ItemsGrid items={items} activeTab={activeTab} />
        </div>

        <div className="flex flex-col h-full justify-center items-center">
          <button onClick={handleConfirm} className="bg-[#ECF0F6]/80 text-black w-24 rounded-lg">
            Confirm
          </button>
        </div>
    </div>
    );
}

