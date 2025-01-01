"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getItemName, getDressName } from "@/libs/getItemName";
import { paramsMapping } from "@/libs/getItemName";
import Header from "@/components/globalComponents/Header";

function UnlockPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const param = searchParams.get("param");

  // Get item details from the mapping
  const itemDetails = param ? paramsMapping[param] : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/background.svg')] bg-cover bg-center">
      {/* Main Container */}
      <div
        className="flex min-h-screen flex-col overflow-hidden rounded-lg border border-gray-300 bg-gradient-to-b from-[#092B44] via-[#625B87] to-[#D2CAFF]"
        onClick={() => router.push("/items")}
      >
        {/* Header Section */}
        <Header />

        {/* Title Section */}
        <div className="relative mt-4 flex flex-col items-center space-y-0.5">
          {/* "New Items" Image */}
          <Image
            src="/images/newitem.webp"
            alt="New Items"
            width={250}
            height={80}
            className="object-contain"
          />

          {/* Second Image */}
          <Image
            src="/images/unlocked.webp"
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
            justifyItems: "center",
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
                backgroundImage: "url('/images/bg-item-unlock-overlay.webp')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {itemDetails ? (
                <Image
                  src={`/images/item${itemDetails.itemId}.webp`}
                  alt={`Item ${itemDetails.itemId}`}
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
              ) : (
                <Image
                  src="/images/loadingIcon.webp"
                  alt="loading icon"
                  width={50}
                  height={50}
                  className="animate-spin rounded-lg"
                />
              )}
            </div>

            {/* Item Name */}
            <p
              className="px-2 text-center font-vimamsa text-4xl text-white"
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
              }}
            >
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
                backgroundImage: "url('/images/bg-item-unlock-overlay.webp')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {itemDetails ? (
                <div className="relative mt-12 h-[170px] w-[170px]">
                  <Image
                    src={`/model/dress/dress${itemDetails.itemId}.webp`}
                    alt={`Hat ${itemDetails.itemId}`}
                    fill={true}
                    className="rounded-lg object-cover object-top"
                  />
                </div>
              ) : (
                <Image
                  src="/images/loadingIcon.webp"
                  alt="loading icon"
                  width={50}
                  height={50}
                  className="animate-spin rounded-lg"
                />
              )}
            </div>

            {/* TODO : change this to Dress*/}
            <p
              className="-ml-2 px-2 text-center font-vimamsa text-4xl text-white"
              style={{
                wordWrap: "break-word",
                overflowWrap: "break-word",
                whiteSpace: "normal",
              }}
            >
              {itemDetails ? getDressName({ num: itemDetails.itemId }) : ""}
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex h-14 w-full items-center justify-center py-4">
          <div className="cursor-pointer">
            <Image
              src="/images/Tap to Continue.webp"
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

export default function UnlockPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnlockPageContent />
    </Suspense>
  );
}
