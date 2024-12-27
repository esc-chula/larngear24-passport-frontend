"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { status } = useSession();
  return (
    <header className="flex h-[104px] w-full flex-row items-end justify-between bg-gradient-to-b from-[#359AB9]/50 to-[#ECF0F7]/50">
      <div className="flex w-full items-center justify-between">
        <Image src="/logo.webp" height={60} width={60} alt="larngear logo" />
        <h1 className="font-vimamsa text-4xl text-[#ECF0F6]">Larngear 24</h1>
        <button
          onClick={() => {
            if (status !== "authenticated") {
              signIn("google");
            } else {
              signOut();
            }
          }}
        >
          <Image
            src="/main/fluent_person-20-filled.webp"
            width={40}
            height={40}
            alt="profile icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
