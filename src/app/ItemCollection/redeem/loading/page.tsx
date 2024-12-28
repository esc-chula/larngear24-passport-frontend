"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function LoadingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const param = searchParams.get("param");

    if (param) {
      setTimeout(() => {
        router.push(`/ItemCollection/redeem/unlock?param=${param}`);
      }, 5000);
    } else {
      router.push("/ItemCollection");
    }
  }, [searchParams, router]);

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

        {/* Loading Section */}
        <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-4 py-8">
          <Image
            src="/images/loading.webp"
            alt="Loading Icon"
            width={500}
            height={500}
            className="animate-spin"
          />
        </div>
      </div>
    </div>
  );
}
