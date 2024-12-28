"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";

interface RedeemResult {
  items?: number[];
  dresses?: string[];
  error?: string;
}

const paramsMapping: Record<string, { itemId: number; dressId: string }> = {
  rMnWMTAfBTzfTK9: { itemId: 1, dressId: "1" },
  ocFRssHrLR7LeDe: { itemId: 2, dressId: "2" },
  "20bWAnzQvoVlxOF": { itemId: 3, dressId: "3" },
  c2teVPwYLGzVcad: { itemId: 4, dressId: "4" },
  LC0SgtQCC4MFhDI: { itemId: 5, dressId: "5" },
  ZH5G5hLvAFW0IL6: { itemId: 6, dressId: "6" },
  cU7VwglZvJwbHnB: { itemId: 7, dressId: "7" },
  BU3BBh9TwAwkeNd: { itemId: 8, dressId: "8" },
  "0VeiMjItHVKRCxx": { itemId: 9, dressId: "9" },
  mB8iOEoEGfk6Ydm: { itemId: 10, dressId: "10" },
  oi2XFECbb9Alogn: { itemId: 11, dressId: "11" },
};

export default function ItemCollection() {
  const router = useRouter();
  const { data: session } = useSession();
  const [redeemResult, setRedeemResult] = useState<RedeemResult | null>(null);

  const handleRedeem = async (param: string) => {
    console.log(`Attempting to redeem with param: ${param}`);

    if (!paramsMapping[param]) {
      console.error("Invalid parameter");
      setRedeemResult({ error: "Invalid parameter" });
      return;
    }

    const { itemId, dressId } = paramsMapping[param];
    console.log(`Mapped itemId: ${itemId}, dressId: ${dressId}`);

    router.push(`/ItemCollection/loading?param=${param}`);

    setTimeout(async () => {
      try {
        console.log("Attempting redemption with payload:", {
          items: [itemId],
          dresses: [dressId],
        });

        const response = await axiosClient.post(
          `${process.env.NEXT_PUBLIC_API_URL}/item/redeem`,
          {
            items: [itemId],
            dresses: [dressId],
          },
          {
            headers: {
              Authorization: `Bearer ${session?.user?.id}`,
            },
          },
        );

        console.log("Redemption successful:", response.data);
        setRedeemResult(response.data);

        router.push(
          `/ItemCollection/redeem/unlock?name=Unlocked%20Item%20${itemId}&image=/images/item${itemId}.png`,
        );
      } catch (error) {
        console.error("Redemption failed:", error);
        setRedeemResult({ error: "Failed to redeem item" });
        router.push("/ItemCollection/redeem/error");
      }
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Item Collection</h1>
      <button onClick={() => handleRedeem("rMnWMTAfBTzfTK9")}>
        Redeem Item 1
      </button>
      <button onClick={() => handleRedeem("ocFRssHrLR7LeDe")}>
        Redeem Item 2
      </button>
      <button onClick={() => handleRedeem("20bWAnzQvoVlxOF")}>
        Redeem Item 3
      </button>
      <button onClick={() => handleRedeem("c2teVPwYLGzVcad")}>
        Redeem Item 4
      </button>
      <button onClick={() => handleRedeem("LC0SgtQCC4MFhDI")}>
        Redeem Item 5
      </button>
      <button onClick={() => handleRedeem("ZH5G5hLvAFW0IL6")}>
        Redeem Item 6
      </button>
      <button onClick={() => handleRedeem("cU7VwglZvJwbHnB")}>
        Redeem Item 7
      </button>
      <button onClick={() => handleRedeem("BU3BBh9TwAwkeNd")}>
        Redeem Item 8
      </button>
      <button onClick={() => handleRedeem("0VeiMjItHVKRCxx")}>
        Redeem Item 9
      </button>
      <button onClick={() => handleRedeem("mB8iOEoEGfk6Ydm")}>
        Redeem Item 10
      </button>
      <button onClick={() => handleRedeem("oi2XFECbb9Alogn")}>
        Redeem Item 11
      </button>
    </div>
  );
}
