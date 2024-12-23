"use client";

import Link from "next/link";
import Header from "@/components/globalComponents/Header";

export default function HomePage() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center gap-4 bg-[url('/bg.webp')] bg-cover md:mx-auto md:max-w-[25rem]">
      <Header />
      <h1 className="text-3xl font-bold text-[#ECF0F6]">
        ยินดีต้อนรับสู่ ค่ายลานเกียร์ 24
      </h1>
      <div className="h-40 w-80 bg-gray-600"></div>
      <ul className="mt-4 flex h-full w-80 flex-col items-center gap-8">
        <li className="flex h-16 w-44 items-center self-end rounded-3xl bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
          <Link
            className="w-full text-center text-4xl font-semibold text-[#ECF0F6]"
            href="/ItemCollection"
          >
            Collection
          </Link>
        </li>
        <li className="flex h-16 w-44 items-center self-start rounded-3xl bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
          <Link
            className="w-full text-center text-4xl font-semibold text-[#ECF0F6]"
            href="/Profile"
          >
            Profile
          </Link>
        </li>
        <li className="flex h-16 w-44 items-center self-end rounded-3xl bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
          <Link
            className="w-full text-center text-4xl font-semibold text-[#ECF0F6]"
            href="/Memory"
          >
            Memory
          </Link>
        </li>
      </ul>
    </div>
  );
}
