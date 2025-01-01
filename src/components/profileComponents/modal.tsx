import ItemsGrid from "./itemGrid";
import type { ModalProps } from "./profileType";
import Image from "next/image";

export default function Modal({
  isOpen,
  onClose,
  items,
  handleArtifactChange,
  isSelectedArtifact,
}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-white bg-opacity-60">
      <div className="fixed bottom-0 left-0 right-0 mx-auto h-[50%] w-full max-w-sm overflow-hidden rounded-t-3xl bg-white bg-opacity-80 shadow-md">
        <div className="relative flex h-16 items-center justify-center bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
          <p className="text-2xl font-semibold text-[#ECF0F6]">
            Choose your artifacts
          </p>
          <button onClick={onClose} className="absolute right-5">
            <Image
              src="/profile/cross.webp"
              alt="X"
              className="h-full w-full"
              width={100}
              height={100}
            />
          </button>
        </div>

        <div className="p-4 text-center">
          <ItemsGrid
            items={items}
            handleArtifactChange={handleArtifactChange}
            isSelectedArtifact={isSelectedArtifact}
          />
        </div>
      </div>
    </div>
  );
}
