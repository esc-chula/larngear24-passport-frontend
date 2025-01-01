"use client";

import Link from "next/link";
import Header from "@/components/globalComponents/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center gap-4 bg-[url('/main/Main1.webp')] bg-cover md:mx-auto md:max-w-[25rem]">
      <Header />
      <h1 className="font-vimamsa text-3xl text-[#ECF0F6]">
        ยินดีต้อนรับสู่ ค่ายลานเกียร์ 24
      </h1>
      <div className="h-40 w-80">
        <Image
          src="/memory/larngear_placeholder.webp"
          alt="larngear_placholder"
          className="object-cover"
          width={320}
          height={160}
        />
      </div>
      <ul className="mt-4 flex h-full w-80 flex-col items-center gap-8">
        <div className="relative flex w-full justify-end">
          <Image
            className="absolute -top-2 left-1"
            src="/main/fluent_person-20-filled.webp"
            width={80}
            height={80}
            alt="profile icon"
          />
          <Image
            className="absolute -top-1 left-[72px]"
            src="/main/mingcute_profile-fill.webp"
            width={60}
            height={60}
            alt="file icon"
          />
          <li className="flex h-16 w-44 items-center self-start rounded-3xl bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
            <LinkButton href="/Profile">Profile</LinkButton>
          </li>
        </div>
        <div className="relative flex w-full justify-start">
          <Image
            className="absolute -bottom-4 -right-4"
            src="/main/stash_trophy-solid.webp"
            width={100}
            height={100}
            alt="stash trophy solid icon"
          />
          <Image
            className="absolute -bottom-4 right-10"
            src="/main/stash_trophy.webp"
            width={84}
            height={84}
            alt="stash trophy icon"
          />
          <li className="flex h-16 w-44 items-center self-end rounded-3xl bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
            <LinkButton href="/items">Collection</LinkButton>
          </li>
        </div>
        <div className="relative flex w-full justify-end">
          <Image
            className="absolute left-16"
            src="/main/zondicons_photo.webp"
            width={60}
            height={60}
            alt="zondicons_photo icon"
          />
          <Image
            className="absolute left-0"
            src="/main/pepicons-pop_letter.webp"
            width={80}
            height={80}
            alt="letter icon"
          />
          <li className="flex h-16 w-44 items-center self-end rounded-3xl bg-gradient-to-t from-[#D2CAFF] to-[#092B44]">
            <LinkButton href="/Memory">Memory</LinkButton>
          </li>
        </div>
      </ul>
    </div>
  );
}

const LinkButton = ({
  children,
  href,
}: {
  children: JSX.Element | string;
  href: string;
}): React.JSX.Element => {
  return (
    <Link
      className="w-full text-center font-vimamsa text-4xl text-[#ECF0F6]"
      href={href}
    >
      {children}
    </Link>
  );
};
