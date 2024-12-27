"use client";

import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface RedeemResult {
  items?: number[];
  dresses?: string[];
  error?: string;
}

export default function ItemCollection() {
  const { data: session } = useSession();
  const [redeemResult, setRedeemResult] = useState<RedeemResult | null>(null);

  const paramsMapping: Record<string, { itemId: number; dressId: string }> = {
    c2teVPwYLGzVcad: { itemId: 4, dressId: "4" },
    LC0SgtQCC4MFhDI: { itemId: 5, dressId: "5" },
    // Add more params as needed
  };

  const handleRedeem = async (param: string) => {
    console.log(`Attempting to redeem with param: ${param}`); // Log the parameter

    if (!paramsMapping[param]) {
      console.log("Invalid parameter"); // Log invalid parameter
      setRedeemResult({ error: "Invalid parameter" });
      return;
    }

    const { itemId, dressId } = paramsMapping[param];
    console.log(`Mapped itemId: ${itemId}, dressId: ${dressId}`); // Log mapped IDs

    try {
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

      console.log("Redemption successful:", response.data); // Log success response
      setRedeemResult(response.data);
    } catch (error) {
      console.error("Redemption failed:", error); // Log error details
      setRedeemResult({ error: "Failed to redeem item" });
    }
  };

  return (
    <div className="flex flex-col space-y-5 p-5">
      <button onClick={() => handleRedeem("c2teVPwYLGzVcad")}>
        Redeem Param 4
      </button>

      <button onClick={() => handleRedeem("LC0SgtQCC4MFhDI")}>
        Redeem Param 5
      </button>

      {redeemResult && (
        <div>
          {redeemResult.error ? (
            <p className="text-red-500">{redeemResult.error}</p>
          ) : (
            <div>
              <p>Item ID: {redeemResult.items?.join(", ")}</p>
              <p>Dress ID: {redeemResult.dresses?.join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
