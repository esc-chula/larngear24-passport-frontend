"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { items } from "../../data/items";

export default function ItemCollection() {
  const router = useRouter();

  return (
    <div>
      <h1>Item Collection</h1>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {item.unlocked ? (
              <Link href={`/ItemCollection/${item.id}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  priority
                />
              </Link>
            ) : (
              <Image
                src={item.image}
                alt="Locked Item"
                width={200}
                height={200}
                onClick={() =>
                  router.push(
                    `/ItemCollection/unlock?name=${encodeURIComponent(item.name)}&image=${encodeURIComponent(item.image)}`,
                  )
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
