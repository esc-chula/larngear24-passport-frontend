"use client";
import AddYours from "@/components/memory/AddYours";
import Banner from "@/components/memory/Banner";
import { LeftArrow } from "@/components/memory/icon/LeftArrow";
import { Pencil } from "@/components/memory/icon/Pencil";
import Link from "next/link";
import { useState } from "react";
import CommentSection from "@/components/memory/CommentSection";
export default function Memory() {
  const [showAddYours, setShowAddYours] = useState(false);
  return (
    <>
      <div className="bg-gradient-to-b from-[#33a1be] via-[#436797] to-[#9b446f] text-[#ECF0F6]">
        <div className="item-center flex justify-center p-10">
          <div className="absolute left-8 size-7">
            <Link href="/">
              <LeftArrow></LeftArrow>
            </Link>
          </div>
          <div className="font-vimamsa text-4xl font-normal">Memory</div>
        </div>
        <div className="item-center mx-4 flex justify-center">
          <img src="https://placehold.co/600x400" />
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

        <div className="m-2 text-center font-vimamsa text-3xl font-normal">
          Photo
        </div>
        <div className="m-2 text-center font-ibm text-base font-bold">
          ส่วนบ้าน
        </div>
        <div className="m-4">
          <div className="mb-4 flex justify-center space-x-4">
            <Banner
              imgUrl="https://placehold.co/100x300"
              googleDriveUrl="https://placehold.co/100x300"
            />
            <Banner
              imgUrl="https://placehold.co/100x300"
              googleDriveUrl="https://placehold.co/100x300"
            />
            <Banner
              imgUrl="https://placehold.co/100x300"
              googleDriveUrl="https://placehold.co/100x300"
            />
            <Banner
              imgUrl="https://placehold.co/100x300"
              googleDriveUrl="https://placehold.co/100x300"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Banner
              imgUrl="https://placehold.co/100x300"
              googleDriveUrl="https://placehold.co/100x300"
            />
            <Banner
              imgUrl="https://placehold.co/100x300"
              googleDriveUrl="https://placehold.co/100x300"
            />
            <Banner
              imgUrl="https://placehold.co/100x300"
              googleDriveUrl="https://placehold.co/100x300"
            />
            <Banner
              imgUrl="https://placehold.co/100x300"
              googleDriveUrl="https://placehold.co/100x300"
            />
          </div>
        </div>

        <div className="m-4 text-center font-ibm text-base font-bold">
          ส่วนกลาง
        </div>
        <div className="item-center m-4 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://placehold.co/300x200"></img>
            <img src="https://placehold.co/300x200"></img>
            <img src="https://placehold.co/300x200"></img>
            <img src="https://placehold.co/300x200"></img>
          </div>
        </div>

        <div>
          <div className="m-4 text-center font-vimamsa text-3xl font-normal">
            Video
          </div>
          <div className="flex items-center justify-center pb-10">
            <div className="grid grid-cols-2 gap-10">
              <div className="aspect-w-21 aspect-h-9 ml-4">
                <iframe
                  src="https://www.youtube.com/embed/19g66ezsKAg"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="text-black">
                <div className="mb-2 flex justify-center text-base font-semibold">
                  Credit
                </div>
                <div className="flex justify-center">Credit</div>
                <div className="flex justify-center">Credit</div>
                <div className="flex justify-center">Credit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
