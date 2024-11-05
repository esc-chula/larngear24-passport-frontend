"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (session === null && pathname !== "/") {
      router.push("/");
    }
  }, [session, router, pathname]);

  return children;
}
