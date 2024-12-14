"use client";

import Image from "next/image";
import Link from "next/link";

export default function ItemCollection() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/images/background.svg')] bg-cover bg-center">
      {/* Main Container */}
      <div className="bg-gradient-tob flex h-screen w-[90%] max-w-md flex-col overflow-hidden rounded-lg border border-gray-300 bg-gradient-to-b from-[#092B44] via-[#625B87] to-[#D2CAFF]">
        {/* Header Section */}
        <div className="relative -mt-2 h-[100px] w-full">
          <Image
            src="/images/Header.svg" // Path to the SVG file
            alt="Header"
            layout="fill" // Ensures the image spans the entire container
            objectFit="cover" // Scales and crops to cover the container
            className="rounded-t-lg"
          />
        </div>

        {/* Collection Title */}
        <div className="mt-4 flex justify-center">
          <img
            src="/images/Collection.svg" // Path to the Collection SVG file
            alt="Collection"
            className="h-auto w-32"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6).keys()].map((item) => (
              <div
                key={item}
                className="flex h-20 items-center justify-center rounded-md border text-gray-600"
              >
                Item {item + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 p-4 text-center">
          <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
