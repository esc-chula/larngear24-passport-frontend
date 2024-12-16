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
  const router = useRouter();

  const itemGroups = [];
  for (let i = 0; i < items.length; i += 3) {
    itemGroups.push(items.slice(i, i + 3));
  }

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
        <div className="mt-4 flex items-center justify-center space-x-2">
          <Link href="/" passHref>
            <img
              src="/images/fi-rr-arrow-left.svg"
              alt="Back Arrow"
              className="h-6 w-6 cursor-pointer"
            />
          </Link>
          <h2 className="text-2xl font-bold text-white">Collection</h2>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-2 px-4 py-2">
          {itemGroups.map((group, index) => (
            <div
              key={index}
              className="bg-[url('/images/itembg.png')] bg-center bg-no-repeat p-4"
              style={{ backgroundSize: `100% 100%` }}
            >
              <div className="flex items-center justify-around">
                {group.map((item: Item) => (
                  <div
                    key={item.id}
                    className="flex cursor-pointer flex-col items-center"
                    onClick={() => {
                      if (item.unlocked) {
                        router.push(`/ItemCollection/${item.id}`);
                      } else {
                        router.push(
                          `/ItemCollection/unlock?name=${encodeURIComponent(
                            item.name,
                          )}&image=${encodeURIComponent(item.image)}`,
                        );
                      }
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className={`${
                        !item.unlocked ? "opacity-50" : ""
                      } rounded-md`}
                    />
                    <p className="mt-2 text-sm text-gray-800">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
