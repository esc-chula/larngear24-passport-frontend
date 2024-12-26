"use client";
import AddYours from "@/components/memory/AddYours";
import Banner from "@/components/memory/Banner";
import { LeftArrow } from "@/components/memory/icon/LeftArrow";
import { Pencil } from "@/components/memory/icon/Pencil";
import Link from "next/link";
import { useState } from "react";
import CommentSection from "@/components/memory/CommentSection";
import Phase2Photo from "@/components/memory/Phase2Photo";

export default function Memory() {
  const [showAddYours, setShowAddYours] = useState(false);
  return (
    <>
      <div className="bg-gradient-to-b from-[#33a1be] via-[#436797] to-[#9b446f] pb-4 text-[#ECF0F6]">
        <div className="item-center flex justify-center p-10">
          <div className="absolute left-8 size-7">
            <Link href="/">
              <LeftArrow></LeftArrow>
            </Link>
          </div>
          <div className="font-vimamsa text-4xl font-normal">Memory</div>
        </div>
        <div className="item-center mx-4 flex justify-center">
          <img src="/memory/larngear_placeholder.webp" />
        </div>

        <div className="item-center mb-3 mt-8 flex justify-center font-ibm text-xl font-bold">
          อยากฝากอะไรถึง LG24 ?
        </div>
        <CommentSection />

        <div className="grid justify-items-end">
          <button
            className="w-29.6 h-6.8 m-2 flex space-x-4 rounded-lg bg-gradient-to-b from-[#092B44] from-0% to-[#D2CAFF] to-90% p-1 text-white"
            onClick={() => setShowAddYours(true)}
          >
            <Pencil></Pencil> &nbsp;Add yours
          </button>
        </div>

        <AddYours
          open={showAddYours}
          close={() => {
            setShowAddYours(false);
          }}
          name={"name"}
          house={"house"}
        />

        {/* Photo after finish camp */}
        {/* <Phase2Photo /> */}
      </div>
    </>
  );
}
