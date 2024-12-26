"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/globalComponents/Button";
import Header from "@/components/globalComponents/Header";
import Link from "next/link";
import Model from "@/components/profileComponents/Model";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ isOpen, onClose }: ModalProps) {
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
  ];

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-white bg-opacity-60">
      <div className="fixed bottom-0 left-0 right-0 mx-auto h-[50%] w-full max-w-sm overflow-hidden rounded-t-3xl bg-white bg-opacity-80 shadow-md">
        <div className="relative flex h-16 items-center justify-center bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
          <p className="text-2xl font-semibold text-[#ECF0F6]">
            Choose your artifacts
          </p>
          <button onClick={onClose} className="absolute right-5">
            <img src="./profile/cross.webp" alt="X" className="h-full w-full" />
          </button>
        </div>

        <div className="p-4 text-center">
          <ItemsGrid items={items} />
        </div>
      </div>
    </div>
  );
}

type Item = {
  id: string;
  name: string;
  isLocked: boolean;
};

function ItemsGrid({ items }: { items: Item[] }) {
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
          className={`mx-2 my-2.5 flex h-28 w-24 flex-col items-center justify-center bg-[#7D7D7D]`}
          style={{ minHeight: "100px" }}
        >
          {/* {item.isLocked && (
            <img
              src="/profile/locked.webp"
              alt="Locked"
              className="h-[30%] w-[30%] object-contain"
            />
          )} */}

          <img src={`/images/item${item.id}.png`} alt={`${item.id}`} />
        </div>
      ))}
    </div>
  );
}

export default function Profile() {
  const [name, setName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtifact, setSelectedArtifact] = useState<number | null>(null);
  const [baanNumber, setBaanNumber] = useState(1);

  const baanName = {
    '1': 'ติดตลก', '2': 'ติดเตียง', '3': 'ติดบั๊ก', '4': 'ติดลิฟต์', 
    '5': 'ติดจุฬา', '6': 'ติดแกลม', '7': 'ติดใจ', '8': 'ติดฝน' 
  }

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

    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage && window;

    if (!isLocalStorageAvailable) return defaultAvatar;

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

  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage && window;
    if (!isLocalStorageAvailable) return;
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);
  }, []);

  const handleSaveName = () => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage && window;
    if (!isLocalStorageAvailable) return;
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
    <div className="relative flex h-full min-h-screen w-full flex-col gap-4 space-y-0 bg-[url('/profile/bg.webp')] md:mx-auto md:max-w-[25rem]">
      <Header />
      <div className="z-0 mx-7 flex items-start">
        <Link href="/">
          <img src="/arrow-left.webp" alt="Back" className="w-5" />
        </Link>
      </div>
      <div className="flex flex-col space-y-2.5">
        <div className="flex flex-row">
          <div className="flex basis-2/3 flex-col items-center justify-center space-y-6">
            <div className="flex flex-col items-start justify-center">
              <div className="flex w-[100%] grow flex-row items-center justify-end space-x-2">
                <input
                  id="nameInput"
                  type="text"
                  value={name}
                  onChange={handleInputChange}
                  placeholder="โปรดใส่ชื่อของคุณ"
                  className="mt-1 h-[10%] w-[70%] rounded-md bg-[#ECF0F6] p-2 text-center text-sm font-semibold focus:outline-none font-ibm"
                />
                <div
                  className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-[#ECF0F6] text-sm"
                  onClick={handleSaveName}
                >
                  <img src="/profile/pencil.webp" className="w-3/5" />
                </div>
              </div>
              <div className="flex w-[100%] flex-col items-center justify-center space-y-4">
                <div className="h-5 w-24 rounded-md bg-[#ECF0F6] text-center text-sm font-semibold font-ibm">
                  บ้าน{baanName[baanNumber]}
                </div>
                <div className="flex h-72 flex-col items-center justify-center">
                  <img src={`/flags/${baanNumber}.webp`} className="overflow-hidden"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="flex basis-1/3 flex-col items-center justify-center space-y-4">
            <img src="/profile/stamp.webp" alt="stamp" />
            <div className="relative z-50 flex h-6 w-20 items-center justify-center rounded-lg bg-[#ECF0F6] text-sm font-semibold font-sans">
              <Link href="/Profile/dress" className="pointer-events-auto">
                fashion
              </Link>
            </div>
            <div className="flex h-52 w-48 items-center justify-center object-contain">
              <Model selectedParts={selectedParts} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 text-xl font-bold text-white font-sans">Artifacts</div>
          <div
            className="flex h-28 w-[90%] max-w-sm flex-row items-center justify-center space-x-11 bg-[url('/profile/artifact-bg.webp')] bg-contain bg-center py-3"
            style={{ backgroundSize: "100% 100%" }}
          >
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-black text-white"
                onClick={() => openArtifactModal(num)}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        <div className="w-30 flex justify-center">
          <Button text="Save Image" imgSrc="./profile/download.webp" />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
