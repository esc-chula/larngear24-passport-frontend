"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  const { status } = useSession();

  return (
    <header className="flex h-[104px] w-full flex-row items-end justify-between bg-gradient-to-b from-[#359AB9]/50 to-[#ECF0F7]/50">
      <div className="flex w-full items-center justify-between px-5">
        <Link href="/">
          <Image src="/logo.webp" height={60} width={60} alt="larngear logo" />
        </Link>
        <Link href="/">
          <h1 className="font-vimamsa text-4xl text-[#ECF0F6]">Larngear 24</h1>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/main/profile.webp"
              width={40}
              height={40}
              quality={100}
              alt="profile icon"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {status === "authenticated" ? (
              <DropdownMenuItem>
                <button onClick={() => signOut()}>Logout</button>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>
                <button onClick={() => signIn("google")}>Login</button>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
