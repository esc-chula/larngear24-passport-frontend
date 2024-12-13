"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/globalComponents/Header";
import Link from "next/link";

function Tabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: "body", label: "ร่างกาย" },
    { id: "hair", label: "ผม" },
    { id: "eyes", label: "ตา" },
    { id: "eyebrows", label: "คิ้ว" },
  ];

  return (
    <div className="flex gap-2 bg-[#36465F] justify-center items-center w-full h-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`w-20 h-8 flex items-center justify-center rounded-md text-white bg-gradient-to-b from-[#092B44] via-[#625B87] to-[#D2CAFF]`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};


type Item = {
  id: string;
  name: string;
  isLocked: boolean;
};

function ItemsGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-3 w-full justify-center justify-items-center bg-[#ECF0F6]/80 h-52"
        style={{
        overflow: "auto", 
        scrollbarWidth: "none", 
        msOverflowStyle: "none", 
        WebkitOverflowScrolling: "touch", 
        overflowY: "scroll", 
      }}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col items-center justify-center bg-[#7D7D7D] w-24 h-10 my-2.5 mx-2`}
          style={{ minHeight: "100px" }}
        >
          <p className="text-black text-sm">{item.name}</p>
          {item.isLocked && (
            <p className="text-black text-xs mt-2 italic">Locked</p>
          )}
        </div>
      ))}
    </div>
  );
};

type ColorPaletteProps = {
  updateColor: (color: string) => void; 
};

const ColorPalette: React.FC<ColorPaletteProps> = ({ updateColor }) => {
  const colors = ["black", "red", "blue"];

  return (
    <div className="flex flex-wrap justify-center mt-4 space-x-2">
      {colors.map((color) => (
        <button
          key={color}
          className="w-7 h-7 rounded-full"
          style={{ backgroundColor: color }}
          onClick={() => updateColor(color)} 
        />
      ))}
    </div>
  );
};


export default function Dress() {
  const [activeTab, setActiveTab] = useState("body")

  const [colors, setColors] = useState({
    hair: "black",
    body: "black",
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

  // test item
  const items = [
    { id: "1", name: "Item 1", isLocked: false },
    { id: "2", name: "Item 2", isLocked: true },
    { id: "3", name: "Item 3", isLocked: false },
    { id: "4", name: "Item 4", isLocked: true },
    { id: "5", name: "Item 5", isLocked: false },
    { id: "6", name: "Item 6", isLocked: false },
    { id: "7", name: "Item 7", isLocked: true },
    { id: "8", name: "Item 8", isLocked: false },
  ];

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
            <div className="h-12 w-12 mx-auto"
              style={{ color: colors.body }}>ร่างกาย
            </div>
            <div className="h-12 w-12 mx-auto"
              style={{ color: colors.hair }}>ผม
            </div>
            <div className="h-12 w-12 mx-auto"
              style={{ color: colors.eyes }}>ตา
              </div>
            <div className="h-12 w-12 mx-auto"
              style={{ color: colors.eyebrows}}>คิ้ว
            </div>
            <div className="absolute top-72 left-9">
              <ColorPalette updateColor={updateColor} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-11/12 mx-auto items-center rounded-lg overflow-hidden">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
          <ItemsGrid items={items} />
        </div>

        <div className="flex flex-col h-full justify-center items-center">
          <button onClick={handleConfirm} className="bg-[#ECF0F6]/80 text-black w-24 rounded-lg">
            Confirm
          </button>
        </div>
    </div>
    );
}

