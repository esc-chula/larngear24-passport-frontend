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
    <div>
      <h1>New Item Unlocked</h1>

      {itemImage && (
        <Image
          src={itemImage}
          alt={itemName ?? "Locked Item"}
          width={200}
          height={200}
        />
      )}

      <p>{itemName ?? "Locked Item"}</p>

      <button
        className="rounded-lg bg-blue-500 p-3 font-semibold text-white"
        onClick={() => router.push("/ItemCollection")}
      >
        Tap To Continue
      </button>
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
