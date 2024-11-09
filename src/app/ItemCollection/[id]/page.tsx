import { items } from "../../../data/items";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ItemInfoPage({
  params,
}: {
  params: { id: string };
}) {
  const item = items.find((item) => item.id.toString() === params.id);

  if (!item?.unlocked) {
    notFound();
  }

  return (
    <div>
      <h1>{item.name}</h1>

      <Image
        src={item.image}
        alt={item.name}
        width={200}
        height={200}
        priority
      />

      <p>{item.description}</p>
    </div>
  );
}
