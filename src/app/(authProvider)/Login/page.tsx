"use client";
import { Suspense } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function Login(): React.JSX.Element {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("next");

  useEffect(() => {
    if (status == "authenticated") {
      router.push(search ? search : "/");
    }
  }, [status]);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-4 bg-[url('/login/bg.webp')] bg-cover md:mx-auto md:max-w-[25rem]">
      <div className="w-72 rounded-xl bg-white px-4 py-4 text-center font-ibm text-xl text-black">
        ใช้ <span className="text-red-500">Google Account</span>{" "}
        เดียวกับที่ใช้สมัครในเว็บ Larngear24
      </div>
      {status == "authenticated" ? (
        <div className="flex flex-col gap-4">
          <button
            className="rounded-[20px] bg-[#ECF0F6] p-4 text-2xl font-bold text-black transition-transform duration-300 hover:scale-105"
            onClick={() => signOut()}
          >
            Google logout
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
