"use client"
import AddYours from "@/components/memory/AddYours";
import Banner from "@/components/memory/Banner"
import CommentBox from "@/components/memory/CommentBox"
import { LeftArrow } from "@/components/memory/icon/LeftArrow";
import { Pencil } from "@/components/memory/icon/Pencil";
import Link from "next/link";
import { useState } from "react";
export default function Memory() {
  const [showAddYours,setShowAddYours] = useState(false)
  return (
    <>
    <div className="bg-gradient-to-b from-[#33a1be] via-[#436797] to-[#9b446f] text-[#ECF0F6]">
    <div className="flex item-center justify-center p-10">
      <div className="absolute left-[2rem] w-[1.75rem] h-[1.75rem]">
      <Link href="/"><LeftArrow></LeftArrow></Link>
      </div>
      <div className="text-4xl font-normal font-vimamsa">Memory</div>
    </div>
          <div className="flex item-center justify-center">
          <img src="https://placehold.co/600x400"/>
          </div>


        <div className="flex justify-center item-center mt-8 mb-3 text-xl font-bold font-ibm">อยากฝากอะไรถึง LG24 ?</div>
          <div className="flex item-center overflow-x-scroll bg-[#ECF0F6] border-y-4 border-[#36465F] h-[17.875rem] pl-1.5">
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
            
              <button className="flex space-x-[1rem] bg-gradient-to-b from-[#092B44] from-0% to-[#D2CAFF] to-90% text-white rounded-lg w-[7.4rem] h-[1.7rem] m-2 p-1" onClick={()=>setShowAddYours(true)}>
              <Pencil></Pencil> &nbsp;Add yours
              </button>
          </div>

        <AddYours open={showAddYours} close={()=>{setShowAddYours(false)}} name={"name"} house={"house"}/>

          <div className="text-center text-3xl font-normal m-2 font-vimamsa">Photo</div>
          <div className="text-center text-base font-bold m-2 font-ibm">ส่วนบ้าน</div>
          <div className="m-4">

            <div className="flex justify-center space-x-[1rem] mb-4">
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            </div>
            <div className="flex justify-center space-x-[1rem]">
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
              <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            </div>
          </div>

        <div className="text-center text-base font-bold m-4 font-ibm">ส่วนกลาง</div>
          <div className="flex justify-center item-center m-4">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://placehold.co/300x200"/>
              <img src="https://placehold.co/300x200"/>
              <img src="https://placehold.co/300x200"/>
              <img src="https://placehold.co/300x200"/>
            </div>
        </div>

        <div>
          <div className="text-center text-3xl font-normal mt-4 font-vimamsa">Video</div>
        </div>
        </div>
    </>
  );
}
