"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

const paramsMapping: Record<string, { itemId: number; image: string }> = {
  rMnWMTAfBTzfTK9: { itemId: 1, image: "/images/item1.webp" },
  ocFRssHrLR7LeDe: { itemId: 2, image: "/images/item2.webp" },
  "20bWAnzQvoVlxOF": { itemId: 3, image: "/images/item3.webp" },
  c2teVPwYLGzVcad: { itemId: 4, image: "/images/item4.webp" },
  LC0SgtQCC4MFhDI: { itemId: 5, image: "/images/item5.webp" },
  ZH5G5hLvAFW0IL6: { itemId: 6, image: "/images/item6.webp" },
  cU7VwglZvJwbHnB: { itemId: 7, image: "/images/item7.webp" },
  BU3BBh9TwAwkeNd: { itemId: 8, image: "/images/item8.webp" },
  "0VeiMjItHVKRCxx": { itemId: 9, image: "/images/item9.webp" },
  mB8iOEoEGfk6Ydm: { itemId: 10, image: "/images/item10.webp" },
  oi2XFECbb9Alogn: { itemId: 11, image: "/images/item11.webp" },
};

export default function UnlockPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const param = searchParams.get("param");

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
            marginTop: "20px",
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
                  src={itemDetails.image}
                  alt={`Item ${itemDetails.itemId}`}
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
              ) : (
                <p className="text-lg text-red-500">Invalid Item</p>
              )}
            </div>

            {/* Item Name */}
            <p className="text-lg text-gray-200">
              {itemDetails
                ? `Unlocked: Item ${itemDetails.itemId}`
                : "Invalid Item"}
            </p>
          </div>

          {/* Second Item Section */}
          <div className="space-y-4" style={{ marginTop: "60px" }}>
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
                  src={itemDetails.image}
                  alt={`Item ${itemDetails.itemId}`}
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
              ) : (
                <p className="text-lg text-red-500">Invalid Item</p>
              )}
            </div>

            {/* Item Name */}
            <p className="text-lg text-gray-200">
              {itemDetails
                ? `Unlocked: Item ${itemDetails.itemId}`
                : "Invalid Item"}
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-16 flex w-full items-center justify-center">
          <div
            className="cursor-pointer"
            onClick={() => router.push("/ItemCollection")}
          >
            <Image
              src="/images/Tap to Continue.webp"
              alt="Tap to Continue"
              width={200}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
