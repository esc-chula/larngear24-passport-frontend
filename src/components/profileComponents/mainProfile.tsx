import getShortedBaanName from "@/libs/getShortedBaanName";
import { ShowName } from "./showName";
import Link from "next/link";
import Model, { type SelectedParts } from "./model";
import Image from "next/image";

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
        <div className="flex flex-col items-center justify-center">
          <ShowName username={username} />
          <div className="mt-3 flex w-[100%] flex-col items-center justify-center space-y-4">
            <div className="h-5 w-24 rounded-md bg-[#dde1e7] text-center font-ibm text-sm font-semibold">
              บ้าน{getShortedBaanName(baanNumber)}
            </div>
            <div className="relative flex h-72 w-[150px] flex-col items-center justify-center">
              <picture>
                <img
                  src={`/flags/${baanNumber}.webp`}
                  alt={`Flag for baan number ${baanNumber + 1}`}
                  className="absolute left-0 top-0 overflow-hidden"
                  width={150}
                  height={0}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="flex basis-1/3 flex-col items-center justify-center space-y-4">
        {/* <div className="h-[110px] w-[150px] bg-[url('/profile/stamp.webp')] bg-cover"></div> */}
        <picture>
          <img
            className="bg-transparent object-contain"
            src="/profile/stamp.webp"
            alt="Stamp"
            width={150}
            height={150}
          />
        </picture>
        <div className="relative z-50 flex h-6 w-20 items-center justify-center rounded-lg bg-[#ECF0F6] font-sans text-sm font-semibold">
          <Link
            href="/Profile/dress"
            className="pointer-events-auto text-black"
          >
            fashion
          </Link>
        </div>
        <div className="flex h-52 w-48 items-center justify-center">
          <Model selectedParts={selectedParts} />
        </div>
      </div>
    </div>
  );
};
