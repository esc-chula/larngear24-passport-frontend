"use client"
import AddYours from "@/components/memory/AddYours";
import { LeftArrow } from "@/components/memory/icon/LeftArrow";
import { Pencil } from "@/components/memory/icon/Pencil";
import Link from "next/link";
import { useState } from "react";
import CommentSection from "@/components/memory/CommentSection";
export default function Memory() {
  const [showAddYours,setShowAddYours] = useState(false)
  return (
    <>
    <div className="bg-gradient-to-b from-[#33a1be] via-[#436797] to-[#9b446f] text-[#ECF0F6]">
    <div className="flex item-center justify-center p-10">
      <div className="absolute left-8 size-7">
      <Link href="/"><LeftArrow></LeftArrow></Link>
      </div>
      <div className="text-4xl font-normal font-vimamsa">Memory</div>
    </div>
          <div className="flex item-center justify-center mx-4">
          <img src="/memory/larngear_placeholder.webp"/>
          </div>


        <div className="flex justify-center item-center mt-8 mb-3 text-xl font-bold font-ibm">อยากฝากอะไรถึง LG24 ?</div>
          <CommentSection />

          <div className="grid justify-items-end">
            
              <button className="flex space-x-4 bg-gradient-to-b from-[#092B44] from-0% to-[#D2CAFF] to-90% text-white rounded-lg w-29.6 h-6.8 m-2 p-1" onClick={()=>setShowAddYours(true)}>
              <Pencil></Pencil> &nbsp;Add yours
              </button>
          </div>

        <AddYours open={showAddYours} close={()=>{setShowAddYours(false)}} name={"name"} house={"house"}/>

         
        </div>
    </>
  );
}
