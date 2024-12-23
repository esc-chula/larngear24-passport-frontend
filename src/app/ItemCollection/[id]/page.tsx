import { items } from "../../../data/items";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ItemInfoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = items.find((item) => item.id.toString() === id);

  if (!item?.unlocked) {
    notFound();
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
        <div className="relative mt-4 flex flex-col items-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Collection</h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 px-4 py-8">
          <h1 className="text-2xl font-bold text-white">{item.name}</h1>

          {/* Item Image with Background */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "220px",
              height: "220px",
              backgroundImage: "url('/images/item-bg-lg24.png')",
              backgroundSize: "100% 100%", // Ensures the background scales correctly
              backgroundPosition: "center",
              borderRadius: "16px", // Adjust to match rounded corners
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={160}
              height={160}
              className="z-10 rounded-lg"
            />
          </div>

          {/* Item Description */}
          <p className="px-4 text-center text-lg text-gray-200">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
