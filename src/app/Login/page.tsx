"use client";

import { signIn, signOut } from "next-auth/react";

export default function HomePage() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-4 bg-[url('/login/bg.webp')] md:mx-auto md:max-w-[25rem]">
      <button
        className="rounded-[20px] bg-[#ECF0F6] p-4 text-2xl font-bold text-black"
        onClick={() => signIn("google")}
      >
        Google login
      </button>
      <button
        className="rounded-[20px] bg-[#ECF0F6] p-4 text-2xl font-bold text-black"
        onClick={() => signOut()}
      >
        Google logout
      </button>
    </div>
  );
}
