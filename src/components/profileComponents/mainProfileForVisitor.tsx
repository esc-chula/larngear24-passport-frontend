import getShortedBaanName from "@/libs/getShortedBaanName";
import Link from "next/link";
import Model, { type SelectedParts } from "./model";
import { ShowNameForVisitor } from "./showNameForVisitor";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useEffect, useState } from "react";
export const MainProfileForVisitor = ({
  baanNumber,
  username,
  selectedParts,
}: {
  baanNumber: number;
  username: string;
  selectedParts: SelectedParts;
}) => {
  const [baan, setBaan] = useState<number>(baanNumber);
  return (
    <div className="flex flex-row">
      <div className="flex basis-2/3 flex-col items-center justify-center space-y-6">
        <div className="flex flex-col items-center justify-center">
          <ShowNameForVisitor username={username} />
          <div className="mt-3 flex w-[100%] flex-col items-center justify-center space-y-4">
            <div className="h-5 w-24 rounded-md bg-[#dde1e7] text-center font-ibm text-sm font-semibold">
              <SelectBaan baan={baan} setBaan={setBaan} />
            </div>
            <div className="relative flex h-72 w-[150px] flex-col items-center justify-center">
              {baan !== 9 ? (
                <picture>
                  <img
                    src={`/flags/${baan}.webp`}
                    alt={`Flag for baan number ${baan + 1}`}
                    className="absolute left-0 top-0 overflow-hidden"
                    width={150}
                    height={0}
                  />
                </picture>
              ) : (
                <div className="flex h-full w-[150px] items-center justify-center bg-gray-300 font-ibm font-semibold">
                  {" "}
                  เลือกบ้านก่อนงับ
                </div>
              )}
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
            href="/visitor/Profile/dress"
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

const SelectBaan = ({
  baan,
  setBaan,
}: {
  baan: number;
  setBaan: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element => {
  const handleBaanChange = (baan: number) => {
    localStorage.setItem("baan", baan.toString());
    setBaan(baan);
  };

  useEffect(() => {
    const isLocalStorageAvailable =
      typeof window !== "undefined" && window.localStorage && window;
    if (!isLocalStorageAvailable) return;

    const visitorBaan = localStorage.getItem("baan");
    if (visitorBaan) {
      try {
        setBaan(parseInt(visitorBaan));
      } catch (error) {
        console.error("Failed to parse 'baan' from localStorage:", error);
      }
    }
  }, []);

  console.log(baan);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-ibm">
        บ้าน{getShortedBaanName(baan)}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center font-ibm">
          เลือกบ้าน
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => handleBaanChange(1)}
          className="font-ibm"
        >
          ติดตลก
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleBaanChange(2)}
          className="font-ibm"
        >
          ติดเตียง
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleBaanChange(3)}
          className="font-ibm"
        >
          ติดบั๊ก
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleBaanChange(4)}
          className="font-ibm"
        >
          ติดลิฟต์
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleBaanChange(5)}
          className="font-ibm"
        >
          ติดจุฬา
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleBaanChange(6)}
          className="font-ibm"
        >
          ติดแกลม
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleBaanChange(7)}
          className="font-ibm"
        >
          ติดใจ
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleBaanChange(8)}
          className="font-ibm"
        >
          ติดฝน
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
