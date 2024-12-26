import Banner from "./Banner";
const Phase2Photo = () => {
  return (
    <>
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
    </>
  );
};

export default Phase2Photo;
