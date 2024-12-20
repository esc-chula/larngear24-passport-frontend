"use client"
import AddYours from "@/components/memory/AddYours";
import Banner from "@/components/memory/Banner"
import { LeftArrow } from "@/components/memory/icon/LeftArrow";
import { Pencil } from "@/components/memory/icon/Pencil";
import Link from "next/link";
import { useState } from "react";
import CommentBox from "@/components/memory/CommentBox";
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
          <img src="https://placehold.co/600x400"/>
          </div>


        <div className="flex justify-center item-center mt-8 mb-3 text-xl font-bold font-ibm">อยากฝากอะไรถึง LG24 ?</div>
          <div className="flex item-center overflow-x-scroll bg-[#ECF0F6] border-y-4 border-[#36465F] h-71.5 pl-1.5">
              <div className="gird grid-row-2">
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              </div>
              <div className="gird grid-row-2">
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              </div>
              <div className="gird grid-row-2">
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              </div>
              <div className="gird grid-row-2">
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              </div>
              <div className="gird grid-row-2">
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              <CommentBox name="name" house="house" comment="comment" image="https://placehold.co/25x25"/>
              </div>     
          </div>

          <div className="grid justify-items-end">
            
              <button className="flex space-x-4 bg-gradient-to-b from-[#092B44] from-0% to-[#D2CAFF] to-90% text-white rounded-lg w-29.6 h-6.8 m-2 p-1" onClick={()=>setShowAddYours(true)}>
              <Pencil></Pencil> &nbsp;Add yours
              </button>
          </div>

        <AddYours open={showAddYours} close={()=>{setShowAddYours(false)}} name={"name"} house={"house"}/>

          <div className="text-center text-3xl font-normal m-2 font-vimamsa">Photo</div>
          <div className="text-center text-base font-bold m-2 font-ibm">ส่วนบ้าน</div>
          <div className="m-4">

            <div className="flex justify-center space-x-4 mb-4">
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            </div>
            <div className="flex justify-center space-x-4">
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            </div>
          </div>

        <div className="text-center text-base font-bold m-4 font-ibm">ส่วนกลาง</div>
          <div className="flex justify-center item-center m-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://placehold.co/300x200"></img>
              <img src="https://placehold.co/300x200"></img>
              <img src="https://placehold.co/300x200"></img>
              <img src="https://placehold.co/300x200"></img>
            </div>
        </div>

        <div>
  <div className="text-center text-3xl font-normal m-4 font-vimamsa">Video</div>
  <div className="flex justify-center items-center pb-10">
    <div className="grid grid-cols-2 gap-10">
      <div className="aspect-w-21 aspect-h-9 ml-4">
        <iframe 
          src="https://www.youtube.com/embed/19g66ezsKAg" 
          allowFullScreen 
          className="w-full h-full"
        />
      </div>
      <div className="text-black">
      <div className="flex justify-center mb-2 font-semibold text-base">Credit</div>
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
