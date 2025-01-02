"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const HeaderForVistor = () => {
  return (
    <header className="flex h-[104px] w-full flex-row items-end justify-between bg-gradient-to-b from-[#359AB9]/50 to-[#ECF0F7]/50">
      <div className="flex w-full items-center justify-between px-5">
        <Link href="/visitor" passHref>
          <picture>
            <img src="/logo.webp" height={60} width={60} alt="larngear logo" />
          </picture>
        </Link>
        <Link href="/visitor" passHref>
          <h1 className="font-vimamsa text-4xl text-[#ECF0F6]">Larngear 24</h1>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <picture>
              <img
                src="/main/profile.webp"
                width={40}
                height={40}
                alt="profile icon"
              />
            </picture>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <p>visitor</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default HeaderForVistor;
