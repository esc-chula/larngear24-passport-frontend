"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { paramsMapping } from "@/libs/getItemName";

export default function LoadingPage() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    try {
      if (!session) return;
      const param = searchParams.get("param") ?? "";
      if (!param) throw new Error("param is null");
      const item = paramsMapping[param]?.itemId;

      const handdlePost = async () => {
        const response = await axiosClient.post(
          `${process.env.NEXT_PUBLIC_API_URL}/item/redeem`,
          {
            items: [item],
            dresses: [item?.toString()],
          },
          {
            headers: {
              Authorization: `Bearer ${session?.user?.id}`,
            },
          },
        );
        if (response.status.toString() != "200") {
          throw new Error("can't fetch");
        }
        router.push(`/ItemCollection/redeem/unlock?param=${param}`);
      };
      void handdlePost();
    } catch {
      router.push("/ItemCollection");
    }
  }, [searchParams]);

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
            src="/images/loading.png"
            alt="Loading Icon"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
