import { items } from "../../../data/items";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemDesp, getItemName } from "@/libs/getItemName";

export default async function ItemInfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = items.find((item) => item.id.toString() === id);

  // TODO : handle this
  if (!item?.unlocked) {
    notFound();
  }

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center gap-4 bg-[url('/main/bg.webp')] bg-cover md:mx-auto md:max-w-[25rem]">
      {/* Main Container */}
      <div className="relative flex h-screen w-[90%] max-w-md flex-col overflow-hidden rounded-lg">
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
        <Link
          href="/ItemCollection"
          className="relative left-4 top-4 flex items-center"
        >
          <Image
            src="/images/fi-rr-arrow-left.svg"
            alt="Back Arrow"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </Link>

        {/* Collection Title */}
        <div className="relative mt-4 flex flex-col items-center space-y-2">
          <Image
            src="/images/Collection.png"
            alt="Collection"
            width={150}
            height={200}
          />
        </div>

        {/* Content Section */}
        <div className="my-5 flex flex-1 flex-col items-center justify-center space-y-4 rounded-3xl border-2 border-white bg-white bg-opacity-65 px-4 py-8 text-black backdrop-blur-sm">
          {/* Item Image with Background */}
          <div
            className="relative flex items-center justify-center rounded-full bg-black bg-opacity-80"
            style={{
              width: "220px",
              height: "220px",
              backgroundImage: "url('/images/item-bg-lg24.png')",
              backgroundSize: "100% 100%", // Ensures the background scales correctly
              backgroundPosition: "center",
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={160}
              height={160}
              className="z-10"
            />
          </div>
          <h1 className="text-2xl font-bold">
            {getItemName({ num: parseInt(id) })}
          </h1>
          {/* Item Description */}
          <p className="px-4 text-center">
            {getItemDesp({ num: parseInt(id) })}
          </p>
        </div>
      </div>
    </div>
  );
}
