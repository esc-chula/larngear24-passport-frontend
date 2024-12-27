"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/globalComponents/Button";
import Header from "@/components/globalComponents/Header";
import Link from "next/link";
import { toPng } from "html-to-image";
import Modal from "@/components/profileComponents/modal";
import type { AvatarParts } from "@/components/profileComponents/profileType";
import { defaultAvatar } from "@/components/profileComponents/defaultAvatar";
import { MainProfile } from "@/components/profileComponents/mainProfile";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtifacts, setSelectedArtifacts] = useState<(string | null)[]>(
    [null, null, null],
  );

  const handleArtifactChange = (artifact: string) => {
    if (
      activeArtifact !== null &&
      selectedArtifacts[activeArtifact] === artifact
    ) {
      const tmpSelectedArtifacts = selectedArtifacts;
      if (activeArtifact !== null) tmpSelectedArtifacts[activeArtifact] = null;
      setSelectedArtifacts(tmpSelectedArtifacts);
      setIsModalOpen(false);
      return;
    }
    for (const selected of selectedArtifacts) {
      if (selected === artifact) return;
    }
    const tmpSelectedArtifacts = selectedArtifacts;
    if (activeArtifact !== null)
      tmpSelectedArtifacts[activeArtifact] = artifact;
    setSelectedArtifacts(tmpSelectedArtifacts);
    setIsModalOpen(false);
  };

  const isSelectedArtifact = (artifact: string) => {
    for (let i = 0; i < selectedArtifacts.length; i++) {
      if (selectedArtifacts[i] === artifact) return i;
    }
    return -1;
  };

  const findSelectedArtifact = (index: number) => {
    for (const item of items) {
      if (isSelectedArtifact(item.id) === index) return item.id;
    }
    return null;
  };

  // NEEN : fetch get/user  here
  const user = {
    baan: 1,
    username: "test",
  };

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

  const [selectedParts, setSelectedParts] =
    useState<AvatarParts>(defaultAvatar);

  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage && window;
    if (!isLocalStorageAvailable) return;
    const selectedPart = localStorage.getItem("selectedParts");
    if (selectedPart) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const parsedParts: AvatarParts = JSON.parse(selectedPart);
        setSelectedParts(parsedParts);
      } catch (error) {
        console.error(
          "Failed to parse 'selectedParts' from localStorage:",
          error,
        );
      }
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [activeArtifact, setActiveArtifact] = useState<number | null>(null);

  const handleClickArtifact = (num: number) => {
    setIsModalOpen(true);
    setActiveArtifact(num);
  };

  // capture
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handleSaveAsImage = async () => {
    if (contentRef.current) {
      try {
        const dataUrl = await toPng(contentRef.current);
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error("Failed to capture screenshot", error);
      }
    }
  };

  return (
    <div
      ref={contentRef}
      className="relative flex h-full min-h-screen w-full flex-col gap-4 space-y-0 bg-[url('/profile/bg.webp')] bg-cover md:mx-auto md:max-w-[25rem]"
    >
      <Header />
      <div className="z-0 mx-7 flex items-start">
        <Link href="/">
          <img src="/arrow-left.webp" alt="Back" className="w-5" />
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-center space-y-2.5">
        <MainProfile
          baanNumber={user.baan}
          username={user.username}
          selectedParts={selectedParts}
        />

        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 font-sans text-xl font-bold text-white">
            Artifacts
          </div>
          <div
            className="flex h-28 w-[90%] max-w-sm flex-row items-center justify-center space-x-11 bg-[url('/profile/artifact-bg.webp')] bg-contain bg-center py-3"
            style={{ backgroundSize: "100% 100%" }}
          >
            {[0, 1, 2].map((num) => (
              <div
                key={num}
                className={`flex h-16 w-16 cursor-pointer items-center justify-center rounded-full text-white ${
                  findSelectedArtifact(num) ? "bg-[#ECF0F6]/50" : "bg-black" // Replace colors as needed
                }`}
                onClick={() => handleClickArtifact(num)}
              >
                {findSelectedArtifact(num) && (
                  <img
                    src={`/images/item${findSelectedArtifact(num)}.png`}
                    className="h-[80%] w-[80%]"
                  />
                )}
                {!findSelectedArtifact(num) && (
                  <img
                    src="/profile/question.webp"
                    className="h-[60%] w-[60%]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-30 flex justify-center" onClick={handleSaveAsImage}>
          <Button text="Save Image" imgSrc="./profile/download.webp" />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        items={items}
        handleArtifactChange={handleArtifactChange}
        isSelectedArtifact={isSelectedArtifact}
      />
    </div>
  );
}
