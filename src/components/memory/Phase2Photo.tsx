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
      <div className="m-4 text-center font-vimamsa text-3xl font-normal">
        Video
      </div>
      <div className="item-center aspect-w-21 aspect-h-9 flex justify-center">
        <iframe
          src="https://www.youtube.com/embed/Nd3X8nj_0E0"
          allowFullScreen
        />
      </div>
      <div className="mb-2 mt-4 text-white">
        <div className="flex justify-center font-vimamsa text-3xl font-normal">
          Credit
        </div>
        <div className="ml-4 mr-4">
          <div className="flex justify-center text-lg font-semibold">Photo</div>
          <div className="flex justify-center text-center text-xs">
            ไนท์ ธนธรณ์ เหลืองอรุณเลิศ<br></br>
            ฟุ ชยพล ภาคียานุวัตร<br></br>
            เนส วรภาส เนียมเทศ<br></br>
            เติ้ล นนทวิชญ์ แดงเดช<br></br>
            โฟกัส อิทธิพัทธ์ พุทธมงคล<br></br>
            จัสมิน จิรมิดา รัตนราช<br></br>
            เพชร พีรวิชญ์ แพร่สกุลเจริญกิจ<br></br>
            เป้ง ชนุต​ต์​ จูฑ​ะ​พันธุ์​<br></br>
            ปัง พัทธนนท์ เดชะวลีกุล<br></br>
            มิกกี้ ณัฏฐ์ ณัฏฐาชัย<br></br>
            ปัณ ปัณณพร ปัญจพงษ์<br></br>
            พันช์ พนัชกร ติรชุลี<br></br>
            ดรีม พัทธ์ธีรา ฉัตรพันธารัตน์<br></br>
            แฮมมี่ ธนบดี มุกุระ
          </div>
          <div className="mt-2 flex justify-center text-lg font-semibold">
            Production
          </div>
          <div className="flex justify-center text-center text-xs">
            ป้าง กสิกร พันธุโพธิ์<br></br>
            หยาง พงษ์บุริศร์ ว่องไชยกุล<br></br>
            ปุณ ปุณยวีร์ บำรุงเกาะ<br></br>
            ปัณใส ปาณิศา สุขรินทร์<br></br>
            อิ๊ก มงคล บรรลุนารา<br></br>
            ฝน ณัฏฐ์ ศิลประเสริฐ<br></br>
            อี้ พสิษฐ์ บุญโสภณ<br></br>
            แอม ชุติกาญจน์ มหิทธิกร<br></br>
            เบลล์ ฐิติรัตน์ เสริฐสายบัว<br></br>
            ชิน ชิน สังข์วิเศษ<br></br>
            พุฒ รมิดา สร้อยศรีขำ<br></br>
            โบอิ้ง ศรชนม์ ศรีชูนิ่ม<br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phase2Photo;
