import Banner from "@/components/memory/Banner";

export default function Memory() {
  return (
    <>
    <div className="flex h-full flex-col items-center justify-end space-y-[5%]">
    <div>
      <h1 className="flex justify-center">Memory</h1>
      <img src="https://placehold.co/600x400"/>
    </div>
    <div>
    <p className="flex justify-center">อยากฝากอะไรถึง LG24 ?</p>

      <div className="flex justify-end">
      <button>Add yours</button>
      </div>
    </div>
    <div>
      <p className="flex justify-center">Photo</p>
      <p className="flex justify-center">ส่วนบ้าน</p>
      <div className="flex justify-center space-x-[5%]">
        <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300"/>
        <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300"/>
        <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300"/>
        <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300"/>
      </div>
      <br></br>
      <div className="flex justify-center space-x-[5%]">
        <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300"/>
        <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300"/>
        <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300"/>
        <Banner imgUrl="https://placehold.co/100x300" googleDriveUrl="https://placehold.co/100x300"/>
      </div>
    </div>
    <div>
      <p className="flex justify-center">ส่วนกลาง</p>
      <img src="https://placehold.co/300x200"/>
    </div>
    <div>
      <p className="flex justify-center">Video</p>
    </div>

    </div>
    </>
  )
}
