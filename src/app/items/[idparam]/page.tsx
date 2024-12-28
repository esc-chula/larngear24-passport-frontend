"use client";
import { items } from "../../../data/items";
import Image from "next/image";
import Link from "next/link";
import { getItemDesp, getItemName } from "@/libs/getItemName";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ItemInfoPage() {
  const { idparam } = useParams();
  console.log(idparam);

  const id: string = (Array.isArray(idparam) ? idparam[0] : idparam) ?? "";
  const { data: session } = useSession();
  const [unlockedItems, setUnlockedItems] = useState<string[]>([]);
  const item = items.find((item) => item.id.toString() === id);

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

        // Log the API response for debugging
        console.log("API Response:", response.data);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const unlockedItemIds: string[] =
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          response.data.items?.map(String) || [];
        console.log("Unlocked Item IDs:", unlockedItemIds);

        setUnlockedItems(unlockedItemIds);
      } catch (error) {
        console.error("Failed to fetch unlocked items:", error);
      }
    };

    if (session?.user?.id) {
      void fetchUnlockedItems();
    }
  }, [session]);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center gap-4 bg-[url('/main/bg.webp')] bg-cover md:mx-auto md:max-w-[25rem]">
      {/* Main Container */}
      <div className="relative flex h-screen w-[90%] max-w-md flex-col overflow-hidden rounded-lg">
        {/* Header Section */}
        <div className="relative h-[100px] w-full">
          <Image
            src="/images/Header.svg"
            alt="Header"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <Link href="/items" className="relative left-4 top-4 flex items-center">
          <Image
            src="/images/fi-rr-arrow-left.svg"
            alt="Back Arrow"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </Link>

        {unlockedItems.includes(id ?? "") ? (
          <>
            {/* Collection Title */}
            <div className="relative mt-4 flex flex-col items-center space-y-2">
              <Image
                src="/images/Collection.png"
                alt="Collection"
                width={150}
                height={200}
              />
            </div>

            {/* Content Section */}
            <div className="my-5 flex flex-1 flex-col items-center justify-center space-y-4 rounded-3xl border-2 border-white bg-white bg-opacity-65 px-4 py-8 text-black backdrop-blur-sm">
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
              <h1 className="text-2xl font-bold">
                {getItemName({ num: parseInt(id ?? "0") })}
              </h1>
              {/* Item Description */}
              <p className="px-4 text-center">
                {getItemDesp({ num: parseInt(id ?? "0") })}
              </p>
            </div>
          </>
        ) : (
          <div className="my-5 flex flex-1 flex-col items-center justify-center space-y-6 rounded-3xl border-2 border-white bg-white bg-opacity-65 px-4 py-8 text-black backdrop-blur-sm">
            <Image
              src={"/images/lockedItem.webp"}
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
