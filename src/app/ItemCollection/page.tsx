"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { items } from "src/data/items";

interface Item {
  id: number;
  name: string;
  image: string;
  description: string;
  unlocked: boolean;
}

export default function ItemCollection() {
  const router = useRouter(); // Ensure useRouter is called only once at the top.

  // Group items into chunks of 3
  const itemGroups = items.reduce<Item[][]>((groups, item, index) => {
    if (index % 3 === 0) groups.push([]);
    groups[groups.length - 1]?.push(item);
    return groups;
  }, []);

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

        {/* Collection Title */}
        <div className="relative mt-4 flex items-center justify-center space-x-2">
          <div className="absolute left-4 top-0 flex h-full items-center">
            <Link href="/" passHref>
              <Image
                src="/images/fi-rr-arrow-left.svg"
                alt="Back Arrow"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-white">Collection</h2>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-2 px-4 py-2">
          {itemGroups.map((group, index) => (
            <div
              key={index}
              className={`${
                index === itemGroups.length - 1
                  ? "bg-[url('/images/itembg2.png')]"
                  : "bg-[url('/images/itembg.png')]"
              } bg-center bg-no-repeat p-4 pt-6`}
              style={{ backgroundSize: `100% 100%` }}
            >
              <div
                className={`items-center justify-center ${
                  index === itemGroups.length - 1
                    ? "flex gap-x-4"
                    : "grid grid-cols-3"
                }`}
              >
                {group.map((item) => (
                  <div
                    key={item.id}
                    className="flex h-full cursor-pointer flex-col items-center justify-between"
                    onClick={() => {
                      const path = item.unlocked
                        ? `/ItemCollection/${item.id}`
                        : `/ItemCollection/unlock?name=${encodeURIComponent(
                            item.name,
                          )}&image=${encodeURIComponent(item.image)}`;
                      router.push(path);
                    }}
                  >
                    <Image
                      src={
                        item.unlocked ? item.image : "/images/lockedItem.png"
                      } // Conditional image rendering
                      alt={item.name}
                      width={60}
                      height={60}
                      className={`${
                        !item.unlocked ? "opacity-50" : ""
                      } rounded-md`}
                    />
                    <p className="mt-2 justify-self-end truncate text-center text-sm text-gray-800">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
