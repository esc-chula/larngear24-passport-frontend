"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/globalComponents/Button";
import Header from "@/components/globalComponents/Header";
import Link from "next/link";
import Modal from "@/components/profileComponents/modal";
import type {
  Artifacts,
  AvatarParts,
} from "@/components/profileComponents/profileType";
import { defaultAvatar } from "@/components/profileComponents/defaultAvatar";
import { MainProfile } from "@/components/profileComponents/mainProfile";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { mockItems } from "@/components/profileComponents/mockData";
import Image from "next/image";
import html2canvas from "html2canvas";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArtifacts, setSelectedArtifacts] = useState<Artifacts>([
    null,
    null,
    null,
  ]);

  const [user, SetUser] = useState<{ username: string; baan: number }>({
    username: "น้องค่าย",
    baan: 0,
  });
  const [items, setItems] =
    useState<{ id: string; name: string; isLocked: boolean }[]>(mockItems);

  const handleArtifactChange = (artifact: string) => {
    if (
      activeArtifact !== null &&
      selectedArtifacts[activeArtifact] === artifact
    ) {
      const tmpSelectedArtifacts = selectedArtifacts;
      if (activeArtifact !== null) tmpSelectedArtifacts[activeArtifact] = null;
      setSelectedArtifacts(tmpSelectedArtifacts);
      setIsModalOpen(false);

      // update localstorage
      localStorage.setItem(
        "selectedArtifacts",
        JSON.stringify(tmpSelectedArtifacts),
      );
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
    // update localstorage
    localStorage.setItem(
      "selectedArtifacts",
      JSON.stringify(tmpSelectedArtifacts),
    );
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

  // fetch get/user  here
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) return;
    const handleGet = async () => {
      const response = await axiosClient.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user`,
        {
          headers: {
            Authorization: `Bearer ${session?.user.id}`,
          },
        },
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const itemData: string[] = response.data.items;
      const updatedItems = items.map((item) =>
        itemData.includes(item.id) ? { ...item, isLocked: false } : item,
      );
      setItems(updatedItems);

      SetUser({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        username: response.data.username ?? "น้องค่าย",
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        baan: parseInt(response.data.baan ?? "1"),
      });
    };
    void handleGet();
  }, [session]);

  const [selectedParts, setSelectedParts] =
    useState<AvatarParts>(defaultAvatar);

  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage && window;
    if (!isLocalStorageAvailable) return;

    // get model
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

      // get artifacts
      const tmpArtifacts = localStorage.getItem("selectedArtifacts");
      if (tmpArtifacts) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const parsedArtifacts: Artifacts = JSON.parse(tmpArtifacts);
          setSelectedArtifacts(parsedArtifacts);
        } catch (error) {
          console.error(
            "Failed to parse 'selectedArtifacts' from localStorage:",
            error,
          );
        }
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
        const elementsToExcludeDisplay = contentRef.current.querySelectorAll(
          ".exclude-from-screenshot",
        );
        elementsToExcludeDisplay.forEach((el) => {
          (el as HTMLElement).style.display = "none";
        });

        const elementsToExcludeOpacity = contentRef.current.querySelectorAll(
          ".exclude-from-screenshot2",
        );
        elementsToExcludeOpacity.forEach((el) => {
          (el as HTMLElement).style.opacity = "0";
        });

        await html2canvas(contentRef.current).then((canvas) => {
          const image = canvas.toDataURL("png");
          const a = document.createElement("a");
          a.setAttribute("download", "passport_eiei.png");
          a.setAttribute("href", image);
          a.click();
        });

        elementsToExcludeDisplay.forEach((el) => {
          (el as HTMLElement).style.display = "";
        });

        elementsToExcludeOpacity.forEach((el) => {
          (el as HTMLElement).style.opacity = "";
        });
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
      <div className="">
        <Header />
      </div>

      <div className="exclude-from-screenshot z-0 mx-7 flex items-start">
        <Link href="/">
          <Image src="/arrow-left.webp" alt="Back" width={20} height={20} />
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-start space-y-2.5">
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
                  <Image
                    src={`/images/item${findSelectedArtifact(num)}.webp`}
                    alt="artifact"
                    width={50}
                    height={50}
                  />
                )}
                {!findSelectedArtifact(num) && (
                  <Image
                    src="/profile/question.webp"
                    alt="Question"
                    className="h-[60%] w-[60%]"
                    width={60}
                    height={60}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* <div
          className="exclude-from-screenshot w-30 flex justify-center"
          onClick={handleSaveAsImage}
        >
          <Button text="Save Image" imgSrc="/profile/download.webp" />
        </div> */}
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
