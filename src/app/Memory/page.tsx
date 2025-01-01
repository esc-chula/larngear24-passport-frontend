"use client";
import AddYours from "@/components/memory/AddYours";
import { LeftArrow } from "@/components/memory/icon/LeftArrow";
import { Pencil } from "@/components/memory/icon/Pencil";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommentSection from "@/components/memory/CommentSection";
// import Phase2Photo from "@/components/memory/Phase2Photo";
import { axiosClient } from "@/libs/axios";
import { useSession } from "next-auth/react";
import getShortedBaanName from "@/libs/getShortedBaanName";
import Image from "next/image";
import Phase2Photo from "@/components/memory/Phase2Photo";
import Header from "@/components/globalComponents/Header";

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
  const { data: session, status } = useSession();
  // const router = useRouter();
  // if (!session?.user.id) {
  //   void router.push("/Login");
  // }
  useEffect(() => {
    async function fetchUserProfile() {
      if (!session) return;
      if (!session.user) return;

      try {
        const response = await axiosClient.get<UserData>(
          `${process.env.NEXT_PUBLIC_API_URL}/user`,
          {
            headers: {
              Authorization: `Bearer ${session?.user.id}`,
            },
          },
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    void fetchUserProfile();
  }, [session, status]);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#33a1be] via-[#436797] to-[#9b446f] pb-4 text-[#ECF0F6]">
        <Header />
        <div className="item-center flex justify-center p-10">
          <div className="absolute left-8 size-7">
            <Link href="/">
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
          name={userInfo?.username ?? ""}
          house={getShortedBaanName(parseInt(userInfo?.baan ?? "0"))}
          imgUrl={userInfo?.image ?? ""}
        />

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
