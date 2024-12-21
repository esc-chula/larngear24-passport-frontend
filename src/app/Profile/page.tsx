"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/globalComponents/Button";
import Header from "@/components/globalComponents/Header";
import Link from "next/link";
import Model from "@/components/profileComponents/model";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Modal ({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  // test item
  const items = [
    { id: "1", name: "Item 1", isLocked: true },
    { id: "2", name: "Item 2", isLocked: true },
    { id: "3", name: "Item 3", isLocked: false },
    { id: "4", name: "Item 4", isLocked: true },
    { id: "5", name: "Item 5", isLocked: true },
    { id: "6", name: "Item 6", isLocked: false },
    { id: "7", name: "Item 7", isLocked: false },
    { id: "8", name: "Item 8", isLocked: false },
    { id: "9", name: "Item 9", isLocked: true },
    { id: "10", name: "Item 10", isLocked: true },
    { id: "11", name: "Item 11", isLocked: true },
    { id: "12", name: "Item 12", isLocked: true }
  ];

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-60 z-50">
      <div className="fixed bottom-0 bg-white bg-opacity-80 max-w-sm w-full h-[50%] shadow-md mx-auto left-0 right-0 rounded-t-3xl overflow-hidden">
        <div className="relative flex justify-center items-center h-16 bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
          <p className="text-[#ECF0F6] text-2xl font-semibold">Choose your artifacts</p>
          <button
            onClick={onClose}
            className="absolute right-5"
          >
            <img
              src="./profile/cross.webp"
              alt="X"
              className="w-full h-full"
            />
          </button>
        </div>

        <div className="p-4 text-center">
          <ItemsGrid items={items} />
        </div>
      </div>
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
    <div className="grid grid-cols-3 w-full justify-center justify-items-center bg-[#ECF0F6]/80 h-72"
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
          className={`flex flex-col items-center justify-center bg-[#7D7D7D] w-24 h-28 my-2.5 mx-2`}
          style={{ minHeight: "100px" }}
        >
          {item.isLocked && <img
            src="/profile/locked.webp"
            alt="Locked"
            className="w-[30%] h-[30%] object-contain"
          />}
        </div>
      ))}
    </div>
  );
};


export default function Profile() {
  const [name, setName] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<number | null>(null);

  const [selectedParts, setSelectedParts] = useState<{
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
    }>(() => {
      const savedAvatar = localStorage.getItem("selectedParts");
      return savedAvatar ? JSON.parse(savedAvatar) : {
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
    });

  useEffect(() => {
    const savedName = localStorage.getItem("name")
    if(savedName) setName(savedName)
  }, [])

  const handleSaveName = () => {
    localStorage.setItem("name", name.trim());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const openArtifactModal = (artifactNumber: number) => {
    setSelectedArtifact(artifactNumber);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArtifact(null);
  };

  return (
    <div className="relative flex flex-col h-full min-h-screen w-full gap-4 space-y-0 bg-[url('/profile/bg.webp')] md:mx-auto md:max-w-[25rem]">
        <Header />
        <div className="flex items-start mx-7 z-0">
          <Link href="/">
            <img src="/arrow-left.webp" alt="Back" className="w-5"/>
          </Link>
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="flex flex-row">
            <div className="flex flex-col basis-2/3 justify-center items-center space-y-6">
              <div className="flex flex-col justify-center items-start">
                <div className="flex flex-row grow justify-end items-center space-x-2 w-[100%]">
                  <input
                    id="nameInput"
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="โปรดใส่ชื่อของคุณ"
                    className="w-[70%] h-[10%] p-2 mt-1 rounded-md focus:outline-none bg-[#ECF0F6] text-sm text-center font-semibold"
                  />
                  <div 
                    className="bg-[#ECF0F6] w-6 h-6 text-sm rounded-md flex justify-center items-center overflow-hidden"
                    onClick={handleSaveName}  
                  >
                    <img src="/profile/pencil.webp" className="w-3/5"/>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[100%] space-y-4">
                  <div className="bg-[#ECF0F6] text-sm rounded-md w-24 h-5 text-center font-semibold">บ้าน XXX</div>
                  <div className="flex flex-col justify-center items-center bg-[#ECF0F6] w-[80%] h-64"> 
                    <div>flag</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col basis-1/3 justify-center items-center space-y-4">
              <div className="flex flex-col justify-center items-center bg-[#ECF0F6] w-28 h-28 rounded-full">
                stamp
              </div>
              <div className="bg-[#ECF0F6] text-sm rounded-md w-16 h-6 items-center flex justify-center font-semibold z-50 relative">
                <Link href="/Profile/dress" className="pointer-events-auto">
                  fashion
                </Link>
              </div>
              <div className="w-48 h-52 flex justify-center items-center object-contain">
                <Model selectedParts={selectedParts} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-xl font-bold mb-2">Artifacts</div>
            <div
              className="flex flex-row justify-center items-center space-x-11 bg-[url('/profile/artifact-bg.webp')] bg-center bg-contain w-[90%] h-28 max-w-sm py-3"
              style={{ backgroundSize: '100% 100%' }}
            >
              {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="w-16 h-16 rounded-full bg-black flex justify-center items-center text-white cursor-pointer"
                onClick={() => openArtifactModal(num)}
              >
                {num}
              </div>
            ))}
            </div>
          </div>

          <div className="w-30 flex justify-center">
            <Button text="Save Image" imgSrc="./profile/download.webp"/>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
    );
}
