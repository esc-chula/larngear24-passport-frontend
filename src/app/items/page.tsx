"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { items as initialItems } from "src/data/items";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Header from "@/components/globalComponents/Header";

interface Item {
  id: number;
  name: string;
  image: string;
  description: string;
  unlocked: boolean;
}

export default function ItemCollection() {
  const router = useRouter();
  const { data: session } = useSession();
  const [unlockedItems, setUnlockedItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchUnlockedItems = async () => {
      try {
        const response = await axiosClient.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user`,
          {
            headers: {
              Authorization: `Bearer ${session?.user?.id}`,
            },
          },
        );

        // // Log the API response for debugging
        // console.log("API Response:", response.data);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const unlockedItemIds: string[] =
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          response.data.items?.map(String) || [];
        // console.log("Unlocked Item IDs:", unlockedItemIds);

        setUnlockedItems(unlockedItemIds);
      } catch (error) {
        console.error("Failed to fetch unlocked items:", error);
      }
    };

    if (session?.user?.id) {
      void fetchUnlockedItems();
    }
  }, [session]);

  const itemGroups = initialItems.reduce<Item[][]>((groups, item, index) => {
    if (index % 3 === 0) groups.push([]);
    groups[groups.length - 1]?.push(item);
    return groups;
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/background.svg')] bg-cover bg-center">
      {/* Main Container */}
      <div className="flex min-h-screen w-full flex-col overflow-hidden rounded-lg border border-gray-300 bg-gradient-to-b from-[#092B44] via-[#625B87] to-[#D2CAFF]">
        {/* Header Section */}
        <Header />

        {/* Collection Title */}
        <div className="relative my-6 flex items-center justify-center space-x-2">
          <div className="absolute left-4 top-0 flex h-full items-center">
            <Link href="/" passHref>
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

        {/* Content Section */}
        <div className="flex-1 space-y-2 px-4 py-2">
          {itemGroups.map((group, index) => (
            <div
              key={index}
              className={`${
                index === itemGroups.length - 1
                  ? "bg-[url('/images/itembg2.webp')]"
                  : "bg-[url('/images/itembg.webp')]"
              } bg-center bg-no-repeat p-5 pt-6`}
              style={{ backgroundSize: `100% 100%` }}
            >
              <div
                className={`flex items-center justify-center ${
                  index === itemGroups.length - 1
                    ? "flex gap-x-8"
                    : "grid grid-cols-3"
                }`}
              >
                {group.map((item) => {
                  const isUnlocked = unlockedItems.includes(String(item.id));

                  return (
                    <div
                      className="flex items-center justify-center"
                      key={item.id}
                    >
                      <button
                        className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-white bg-opacity-30 backdrop-blur-sm"
                        onClick={() => {
                          router.push(`/items/${item.id}`);
                        }}
                      >
                        <Image
                          src={
                            isUnlocked ? item.image : "/images/lockeditem.webp"
                          }
                          alt={item.name}
                          width={60}
                          height={60}
                          className={`${!isUnlocked ? "" : ""}`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
