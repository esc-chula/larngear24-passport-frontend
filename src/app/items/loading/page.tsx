"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { paramsMapping } from "@/libs/getItemName";
import Header from "@/components/globalComponents/Header";
import { toast } from "@/hooks/use-toast";

function LoadingContent() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    try {
      if (!session) return;
      const param = searchParams.get("param") ?? "";
      if (!param || !(param in paramsMapping)) throw new Error("param is null");
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
        if (response.statusText !== "OK") {
          throw new Error("can't fetch");
        } else {
          toast({
            title: "Success",
            description: "Unlock Item success",
            className: "bg-green-500 text-white",
          });
          router.push(`/items/redeem/unlock?param=${param}`);
        }
      };
      void handdlePost();
    } catch {
      toast({
        title: "Unlock Item failed",
        description: "Please check you qr code or try again.",
        className: "bg-red-500 text-white",
      });
      router.push("/items");
    }
  }, [session, searchParams, router]); // Ensure router is included in the dependency array

  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-4 py-8">
      <Image
        src="/images/loading.webp"
        alt="Loading Icon"
        width={500}
        height={500}
      />
    </div>
  );
}

export default function LoadingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-screen items-center justify-center bg-[url('/main/Main1.webp')] bg-cover bg-center">
        {/* Main Container */}
        <div className="flex h-screen flex-col overflow-hidden rounded-lg border border-gray-300 bg-gradient-to-b from-[#092B44] via-[#625B87] to-[#D2CAFF]">
          {/* Header Section */}
          <Header />

          {/* Loading Section */}
          <LoadingContent />
        </div>
      </div>
    </Suspense>
  );
}
