"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-red-500">Hi this is main page</h1>
      <ul className="mt-4 flex flex-col gap-4">
        <li>
          <Link href="/ItemCollection">Item Collection page</Link>
        </li>
        <li>
          <Link href="/Profile">Profile page</Link>
        </li>
        <li>
          <Link href="/Memory">Memory Collection page</Link>
        </li>
      </ul>
      <div className="mt-5 flex flex-row gap-4">
        <button
          className="rounded-lg bg-blue-500 p-3 font-semibold text-white"
          onClick={() => signIn("google")}
        >
          Sample login Button
        </button>
        <button
          className="rounded-lg bg-blue-500 p-3 font-semibold text-white"
          onClick={() => signOut()}
        >
          Sample logout Button
        </button>
      </div>
    </div>
  );
}
