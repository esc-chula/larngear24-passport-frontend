"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

function UnlockItem() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemName = searchParams.get("name");
  const itemImage = searchParams.get("image");

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
            style={{ objectFit: "contain" }}
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
        <div className="px-15 flex flex-1 flex-col items-center space-y-6 py-10">
          {/* Item Image with Background */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "220px",
              height: "220px",
              backgroundImage: "url('/images/bg-item-unlock.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {itemImage && (
              <Image
                src={itemImage}
                alt={itemName ?? "Locked Item"}
                width={100}
                height={100}
                className="rounded-lg"
              />
            )}
          </div>

          {/* Item Name */}
          <p className="text-lg text-gray-200">{itemName ?? "Locked Item"}</p>

          {/* Continue Button */}
          <div className="mt-16 flex w-full items-center justify-center">
            {" "}
            {/* Added a full-width flex wrapper and margin */}
            <div
              className="cursor-pointer"
              onClick={() => router.push("/ItemCollection")}
            >
              <Image
                src="/images/Tap to Continue.png" // Replace with the correct path
                alt="Tap to Continue"
                width={200}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <UnlockItem />
    </Suspense>
  );
}
