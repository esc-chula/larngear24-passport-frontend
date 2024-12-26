"use client";
import { Suspense } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function Login(): React.JSX.Element {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("next");

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-4 bg-[url('/login/bg.webp')] md:mx-auto md:max-w-[25rem]">
      {status == "authenticated" ? (
        <div className="flex flex-col gap-4">
          <button
            className="rounded-[20px] bg-[#ECF0F6] p-4 text-2xl font-bold text-black transition-transform duration-300 hover:scale-105"
            onClick={() => signOut()}
          >
            Google logout
          </button>
          <button
            className="rounded-[20px] bg-[#ECF0F6] p-4 text-2xl font-bold text-black transition-transform duration-300 hover:scale-105"
            onClick={() => {
              router.push(search ? search : "/");
            }}
          >
            Back to page
          </button>
        </div>
      ) : (
        <button
          className="rounded-[20px] bg-[#ECF0F6] p-4 text-2xl font-bold text-black transition-transform duration-300 hover:scale-105"
          onClick={() => signIn("google")}
        >
          Google login
        </button>
      )}
    </div>
  );
}

export default function Page(): React.JSX.Element {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Login />
    </Suspense>
  );
}
