"use client";
import AddYours from "@/components/memory/AddYours";
import { LeftArrow } from "@/components/memory/icon/LeftArrow";
import { Pencil } from "@/components/memory/icon/Pencil";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Phase2Photo from "@/components/memory/Phase2Photo";
import { axiosClient } from "@/libs/axios";
import getShortedBaanName from "@/libs/getShortedBaanName";
import Image from "next/image";
import Phase2Photo from "@/components/memory/Phase2Photo";
import HeaderForVistor from "@/components/globalComponents/HeaderForVisitor";
import CommentSectionForVisitor from "@/components/memory/CommentSectionForvisitor";

interface UserData {
  user_id: string;
  username: string;
  baan: string;
  image: string;
  email: string;
  dresses: number;
  items: number;
}

export default function Memory() {
  const [showAddYours, setShowAddYours] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData>();
  const [render, setRender] = useState<number>(0);
  // const router = useRouter();
  // if (!session?.user.id) {
  //   void router.push("/Login");
  // }
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await axiosClient.get<UserData>(
          `${process.env.NEXT_PUBLIC_API_URL}/user`,
          {
            headers: {
              Authorization: `Bearer Visitor`,
            },
          },
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    void fetchUserProfile();
  }, [userInfo]);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#33a1be] via-[#436797] to-[#9b446f] pb-4 text-[#ECF0F6]">
        <HeaderForVistor />
        <div className="item-center flex justify-center p-10">
          <div className="absolute left-8 size-7">
            <Link href="/visitor" passHref>
              <LeftArrow></LeftArrow>
            </Link>
          </div>
          <div className="font-vimamsa text-4xl font-normal">Memory</div>
        </div>
        <div className="item-center mx-4 flex justify-center">
          <Image
            src="/memory/larngear_placeholder.webp"
            alt="larngear_placholder"
            width={390}
            height={180}
          />
        </div>

        <div className="item-center mb-3 mt-8 flex justify-center font-ibm text-xl font-bold">
          อยากฝากอะไรถึง LG24 ?
        </div>
        <CommentSectionForVisitor key={render} />

        <div className="grid justify-items-center">
          <p className="mt-4 font-ibm font-semibold">
            ขณะนี้ระบบยังไม่เปิดให้ visitor เขียน
          </p>
        </div>

        {/* Photo after finish camp */}
        {/* <Phase2Photo /> */}
        <p className="mt-8 w-full text-center font-ibm font-bold text-gray-300">
          Coming Soon...
          <br />
          รอติดตามในวันสุดท้ายของค่ายนะ!
        </p>
      </div>
    </>
  );
}
