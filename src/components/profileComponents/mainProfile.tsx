import getShortedBaanName from "@/libs/getShortedBaanName";
import { ShowName } from "./showName";
import Link from "next/link";
import Model, { type SelectedParts } from "./model";

export const MainProfile = ({
  baanNumber,
  username,
  selectedParts,
}: {
  baanNumber: number;
  username: string;
  selectedParts: SelectedParts;
}) => {
  return (
    <div className="flex flex-row">
      <div className="flex basis-2/3 flex-col items-center justify-center space-y-6">
        <div className="flex flex-col items-start justify-center">
          <ShowName username={username} />
          <div className="flex w-[100%] flex-col items-center justify-center space-y-4">
            <div className="h-5 w-24 rounded-md bg-[#ECF0F6] text-center font-ibm text-sm font-semibold">
              บ้าน{getShortedBaanName(baanNumber)}
            </div>
            <div className="flex h-72 flex-col items-center justify-center">
              <img
                src={`/flags/${baanNumber}.webp`}
                className="overflow-hidden"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="flex basis-1/3 flex-col items-center justify-center space-y-4">
        <img src="/profile/stamp.webp" alt="stamp" />
        <div className="relative z-50 flex h-6 w-20 items-center justify-center rounded-lg bg-[#ECF0F6] font-sans text-sm font-semibold">
          <Link href="/Profile/dress" className="pointer-events-auto">
            fashion
          </Link>
        </div>
        <div className="flex h-52 w-48 items-center justify-center object-contain">
          <Model selectedParts={selectedParts} />
        </div>
      </div>
    </div>
  );
};