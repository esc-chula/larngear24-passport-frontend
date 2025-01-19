import Image from "next/image";
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
      <div className="m-2 text-center font-ibm text-xs">
        คลิกที่ธงบ้านเพื่อดูรูปเพิ่มเติม
      </div>
      <div className="m-4">
        <div className="mb-4 flex justify-center space-x-4">
          <Banner
            imgUrl={`/flags/1.webp`}
            googleDriveUrl="https://drive.google.com/drive/folders/1-F9jgBMLj7z52FQMIaZNRnZs1hPVJMXf"
          />
          <Banner
            imgUrl={`/flags/2.webp`}
            googleDriveUrl="https://drive.google.com/drive/folders/1v8u7mZdn1VrhULN-XZrJ_06Zc6kVtBs_?usp=sharing"
          />
          <Banner
            imgUrl={`/flags/3.webp`}
            googleDriveUrl="https://drive.google.com/drive/folders/1k1wQrTE6ArRibvzij8yQQU1rljd-oau4"
          />
          <Banner
            imgUrl={`/flags/4.webp`}
            googleDriveUrl="https://drive.google.com/file/d/1-GwCB3Zn97CBDm_WwnApyp9voYU6l15o"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <Banner
            imgUrl={`/flags/5.webp`}
            googleDriveUrl="https://drive.google.com/drive/folders/1tCPPKsvnSeEqdYnNYwhiBKz3HpcWYunV"
          />
          <Banner
            imgUrl={`/flags/6.webp`}
            googleDriveUrl="https://drive.google.com/drive/folders/1tCPPKsvnSeEqdYnNYwhiBKz3HpcWYunV"
          />
          <Banner
            imgUrl={`/flags/7.webp`}
            googleDriveUrl="https://drive.google.com/drive/folders/1FXHRrsyWiiWxwouyw_hYK8Y3WonebN7g?usp=sharing"
          />
          <Banner
            imgUrl={`/flags/8.webp`}
            googleDriveUrl="https://drive.google.com/drive/folders/1FXHRrsyWiiWxwouyw_hYK8Y3WonebN7g?usp=sharing"
          />
        </div>
      </div>

      <div className="mt-4 text-center font-ibm text-base font-bold">
        ส่วนกลาง
      </div>
      <div className="m-2 text-center font-ibm text-xs">
        คลิกที่รูปเพื่อดูรูปเพิ่มเติม
      </div>
      <div className="item-center m-4 flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <a href="https://drive.google.com/drive/folders/1CG-4ePHvj4mnL1P07i_RhQHzSpv3w-Lc?usp=drive_link">
              <Image
                className="transition duration-300 hover:scale-110"
                src="/memory/day1.webp"
                width={170}
                height={60}
                alt="group image"
              />
            </a>
            <div className="text-center">Day 1</div>
          </div>
          <div>
            <a href="https://drive.google.com/drive/folders/1gh5dAIsAacmGpi-5RTg6_wg6zJltqY8U?usp=drive_link">
              <Image
                className="transition duration-300 hover:scale-110"
                src="/memory/day2.webp"
                width={170}
                height={60}
                alt="group image"
              />
            </a>
            <div className="text-center">Day 2</div>
          </div>
          <div>
            <a href="https://drive.google.com/drive/folders/1K588EIR11Y_mEapvszrCKsGSr7vwAglx?usp=drive_link">
              <Image
                className="transition duration-300 hover:scale-110"
                src="/memory/day3.webp"
                width={170}
                height={60}
                alt="group image"
              />
            </a>
            <div className="text-center">Day 3</div>
          </div>
          <div>
            <a href="https://drive.google.com/drive/folders/1pxFLLQgOw8OaeZ7CWFqhFAViW7qe98Ui?usp=drive_link">
              <Image
                className="transition duration-300 hover:scale-110"
                src="/memory/day4.webp"
                width={170}
                height={60}
                alt="group image"
              />
            </a>
            <div className="text-center">Day 4</div>
          </div>
        </div>
      </div>
      {/* <div className="m-4 text-center font-vimamsa text-3xl font-normal">
          Video
        </div>
            <div className="flex item-center justify-center aspect-w-21 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/19g66ezsKAg"
                allowFullScreen
              />
            </div>
            <div className="text-white mt-2 mb-2">
              <div className=" flex justify-center text-base font-bold">
                Credit
              </div>
              <div className="ml-4 mr-4">
              <div className="flex justify-center text-sm font-semibold">Photo</div>
              <div className="flex text-center text-xs">P&apos;Pung, P&apos;Mickey, P&apos;Pun, P&apos;Punch, P&apos;Dream, P&apos;Knight, P&apos;Fu, P&apos;Nest, P&apos;Tle, P&apos;Focus, P&apos;Justmine, P&apos;Petch</div>
              <div className="flex justify-center text-sm mt-2 font-semibold">Production</div>
              <div className="flex text-center text-xs">P'Poon, P'Yang, P'Punsai, P'Puth, P'Paang, P'Fon, P'Ei, P'Am, P'Belle, P'Gor, P'Pun, P'Chin, P'Ik</div>

              </div>
              
            </div> */}
      <div className="mb-2 text-white">
        <div className="flex justify-center text-lg font-bold">Credit</div>
        <div className="ml-4 mr-4">
          <div className="flex justify-center text-sm font-semibold">Photo</div>
          <div className="flex text-center text-xs">
            P&apos;Pung, P&apos;Mickey, P&apos;Pun, P&apos;Punch, P&apos;Dream,
            P&apos;Knight, P&apos;Fu, P&apos;Nest, P&apos;Tle, P&apos;Focus,
            P&apos;Justmine, P&apos;Petch
          </div>
          {/* <div className="flex text-center text-xs">P'Pung, P'Mickey, P'Pun, P'Punch, P'Dream, P'Knight, P'Fu, P'Nest, P'Tle, P'Focus, P'Justmine, P'Petch</div> */}
        </div>
      </div>
    </>
  );
};

export default Phase2Photo;
