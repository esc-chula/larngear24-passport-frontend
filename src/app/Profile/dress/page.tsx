"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/globalComponents/Header";
import Model from "@/components/profileComponents/model";
import Link from "next/link";
import {
  defaultAvatar,
  type item,
} from "@/components/profileComponents/defaultAvatar";
import type { AvatarParts } from "@/components/profileComponents/profileType";
import { mockDress } from "@/components/profileComponents/dressItems";
import ItemsGrid from "@/components/profileComponents/DressItemGrid";
import Tabs from "@/components/profileComponents/Tabs";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Dress() {
  const [items, setItems] = useState<Record<string, item>>(mockDress);
  const [activeTab, setActiveTab] = useState("skin");
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [selectedParts, setSelectedParts] =
    useState<AvatarParts>(defaultAvatar);

  const handlePartSelection = (part: string, imgSrc: string | null) => {
    if (part === "dress" && selectedParts.dress === imgSrc) imgSrc = null;
    setSelectedParts((prevState) => {
      const updatedParts = { ...prevState, [part]: imgSrc };
      return updatedParts;
    });
  };

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
      const dresses: string[] = response.data?.dresses;

      setItems((prevItems) => {
        const dressItems = prevItems.dress ?? [];
        const updatedDress = dressItems.map((item) =>
          dresses.includes(item.id.replace("dress", ""))
            ? { ...item, isLocked: false }
            : item,
        );
        return { ...prevItems, dress: updatedDress };
      });
    };
    void handleGet();
  }, [session]);

  const handleConfirm = () => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage && window;
    if (!isLocalStorageAvailable) return;
    localStorage.setItem("selectedParts", JSON.stringify(selectedParts));
  };

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
    setActiveItemId(null);
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col gap-4 bg-[url('/profile/bg.webp')] bg-cover md:mx-auto md:max-w-[25rem]">
      <Header />
      <div className="mx-7 flex items-start">
        <Link href="/Profile">
          <Image src="/arrow-left.webp" alt="Back" width={20} height={20} />
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-center space-y-4">
        <div className="flex justify-center">
          <div className="relative flex h-64 w-11/12 items-center justify-center rounded-2xl bg-white/50">
            <div className="flex h-[60%] w-[60%] items-center justify-center">
              <Model selectedParts={selectedParts} />
            </div>
          </div>
        </div>
        <div className="mx-4 flex w-11/12 flex-col">
          <Tabs activeTab={activeTab} handleChangeTab={handleChangeTab} />
          <ItemsGrid
            items={items}
            activeTab={activeTab}
            activeItemId={activeItemId}
            setActiveItemId={setActiveItemId}
            handlePartSelection={handlePartSelection}
          />
        </div>

        <div className="flex h-full flex-col items-center justify-center">
          <button
            onClick={handleConfirm}
            className="w-24 rounded-lg bg-[#ECF0F6]/80 font-bold text-black"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
