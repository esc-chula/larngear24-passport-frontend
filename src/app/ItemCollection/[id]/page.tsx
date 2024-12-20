import { items } from "../../../data/items";
import Image from "next/image";
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
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">{item.name}</h1>

      <Image
        src={item.image}
        alt={item.name}
        width={200}
        height={200}
        priority
        className="rounded-lg"
      />

      <p className="text-gray-600">{item.description}</p>
    </div>
  );
}
