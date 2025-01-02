"use client";
import { items } from "../../../../data/items";
import Image from "next/image";
import Link from "next/link";
import { getItemDesp, getItemName } from "@/libs/getItemName";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import HeaderForVistor from "@/components/globalComponents/HeaderForVisitor";

export default function ItemInfoPage() {
  const { idparam } = useParams();
  const id: string = (Array.isArray(idparam) ? idparam[0] : idparam) ?? "";
  const [unlockedItems, setUnlockedItems] = useState<string[]>([]);
  const item = items.find((item) => item.id.toString() === id);

  useEffect(() => {
    const fetchUnlockedItems = async () => {
      try {
        const unlockedItemIds: string[] = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ];

        setUnlockedItems(unlockedItemIds);
      } catch (error) {
        console.error("Failed to fetch unlocked items:", error);
      }
    };

    void fetchUnlockedItems();
  }, []);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center gap-4 bg-[url('/main/Main1.webp')] bg-cover md:mx-auto md:max-w-[25rem]">
      {/* Main Container */}
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden rounded-lg">
        {/* Header Section */}
        <HeaderForVistor />
        {/* Collection Title */}
        <div className="relative my-6 flex items-center justify-center space-x-2">
          <div className="absolute left-4 top-0 flex h-full items-center">
            <Link href="/visitor/items" passHref>
              <Image
                src="/images/fi-rr-arrow-left.svg"
                alt="Back Arrow"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <Image
            src="/images/Collection.webp"
            alt="Collection"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
        {unlockedItems.includes(id ?? "") ? (
          <div className="mx-4 my-5 flex flex-1 flex-col items-center justify-center space-y-6 rounded-3xl border-2 border-white bg-white bg-opacity-65 py-8 text-black backdrop-blur-sm">
            {/* Item Image with Background */}
            <div
              className="relative flex items-center justify-center rounded-full bg-black bg-opacity-80"
              style={{
                width: "220px",
                height: "220px",
                backgroundImage: "url('/images/item-bg-lg24-2.webp')",
                backgroundSize: "100% 100%", // Ensures the background scales correctly
                backgroundPosition: "center",
              }}
            >
              <Image
                src={item?.image ?? ""}
                alt={item?.name ?? ""}
                width={160}
                height={160}
                className="z-10"
              />
            </div>
            <h1 className="font-vimamsa text-4xl">
              {getItemName({ num: parseInt(id ?? "0") })}
            </h1>
            {/* Item Description */}
            <p className="px-4 text-center text-xl">
              {getItemDesp({ num: parseInt(id ?? "0") })}
            </p>
          </div>
        ) : (
          <div className="mx-4 my-5 flex flex-1 flex-col items-center justify-center space-y-6 rounded-3xl border-2 border-white bg-white bg-opacity-65 py-8 text-black backdrop-blur-sm">
            <Image
              src={"/images/lockeditem.webp"}
              alt={"locked"}
              width={120}
              height={120}
            />
            <p className="text-lg">this item is locked</p>
          </div>
        )}
      </div>
    </div>
  );
}
