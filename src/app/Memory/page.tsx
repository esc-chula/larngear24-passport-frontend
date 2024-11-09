"use client"
import AddYours from "@/components/memory/AddYours";
import Banner from "@/components/memory/Banner"
import CommentBox from "@/components/memory/CommentBox"
import { useState } from "react";
export default function Memory() {
  const [showAddYours,setShowAddYours] = useState(false)
  return (
    <>
      <div className="flex h-full flex-col items-center justify-center space-y-[5%] p-4">
        <div className="text-center">
          <h1>Memory</h1>
          <img src="https://placehold.co/600x400"/>
        </div>

        <div className="w-full max-w-[600px]">
        <p className="text-center">อยากฝากอะไรถึง LG24 ?</p>
          <div className="bg-sky-500/50 p-[2%]">
            <div className="flex overflow-x-auto pb-4">
              <div className="flex flex-nowrap space-x-[2%]">
                <CommentBox name="name" house="house" comment="comment" />
                <CommentBox name="name" house="house" comment="comment" />
                <CommentBox name="name" house="house" comment="comment" />
                <CommentBox name="name" house="house" comment="comment" />
                <CommentBox name="name" house="house" comment="comment" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
              <button className="bg-gray-200" onClick={()=>setShowAddYours(true)}>
                Add yours
              </button>
            </div>
        </div>
        <AddYours open={showAddYours} close={()=>{setShowAddYours(false)}} name={"name"} house={"house"}/>

        <div>
          <p className="text-center">Photo</p>
          <p className="text-center">ส่วนบ้าน</p>
          <div className="flex justify-center space-x-[2%]">
            <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
          </div>
          <br></br>
          <div className="flex justify-center space-x-[2%]">
            <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
            <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300" />
          </div>
        </div>

        <div>
          <p className="text-center">ส่วนกลาง</p>
          <img src="https://placehold.co/300x200"/>
        </div>

        <div>
          <p className="text-center">Video</p>
        </div>
      </div>
    </>
  );
}
