"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getItemName, getDressName } from "@/libs/getItemName";
import { paramsMapping } from "@/libs/getItemName";
export default function UnlockPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const param = searchParams.get("param");

  // Get item details from the mapping
  const itemDetails = param ? paramsMapping[param] : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/background.svg')] bg-cover bg-center">
      {/* Main Container */}
      <div className="flex h-screen w-[90%] max-w-md flex-col overflow-hidden rounded-lg border border-gray-300 bg-gradient-to-b from-[#092B44] via-[#625B87] to-[#D2CAFF]">
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

        {/* Title Section */}
        <div className="relative mt-4 flex flex-col items-center space-y-0.5">
          {/* Back Arrow */}
          <div className="absolute left-4 top-0 flex h-full items-center">
            <Image
              src="/images/fi-rr-arrow-left.svg"
              alt="Back Arrow"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => router.push("/ItemCollection")}
            />
          </div>

          {/* "New Items" Image */}
          <Image
            src="/images/newitem.png"
            alt="New Items"
            width={250}
            height={80}
            className="object-contain"
          />

          {/* Second Image */}
          <Image
            src="/images/unlocked.png"
            alt="Unlocked Badge"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Content Section */}
        <div
          className="grid grid-cols-2 gap-x-4 px-10 py-10"
          style={{
            justifyItems: "center", // Centers the items horizontally in each column
            marginTop: "20px", // Adjust margin if needed
          }}
        >
          {/* First Item Section */}
          <div className="space-y-4">
            {/* Item Image with Background */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "170px",
                height: "170px",
                backgroundImage: "url('/images/bg-item-unlock.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {itemDetails ? (
                <Image
                  src={itemDetails.image}
                  alt={`Item ${itemDetails.itemId}`}
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
              ) : (
                <Image
                  src="/images/loadingIcon.png"
                  alt="loading icon"
                  width={50}
                  height={50}
                  className="animate-spin rounded-lg"
                />
              )}
            </div>

            {/* Item Name */}
            <p className="-ml-10 text-center text-lg font-bold text-gray-200">
              {itemDetails ? getItemName({ num: itemDetails.itemId }) : ""}
            </p>
          </div>

          {/* Second Item Section */}
          <div className="ml-2 space-y-4" style={{ marginTop: "60px" }}>
            {/* Item Image with Background */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "170px",
                height: "170px",
                backgroundImage: "url('/images/bg-item-unlock.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {itemDetails ? (
                <Image
                  src={itemDetails.image}
                  alt={`Item ${itemDetails.itemId}`}
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
              ) : (
                <Image
                  src="/images/loadingIcon.png"
                  alt="loading icon"
                  width={50}
                  height={50}
                  className="-z-50 animate-spin rounded-lg"
                />
              )}
            </div>

            {/* TODO : change this to Dress*/}
            <p className="text-gray-20 -ml-2 text-center text-lg font-bold text-white">
              {itemDetails ? getDressName({ num: itemDetails.itemId }) : ""}
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-4 flex w-full items-center justify-center">
          <div
            className="cursor-pointer"
            onClick={() => router.push("/ItemCollection")}
          >
            <Image
              src="/images/Tap to Continue.png" // Replace with the correct path
              alt="Tap to Continue"
              width={200}
              height={50}
              className="animate-bounce object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
