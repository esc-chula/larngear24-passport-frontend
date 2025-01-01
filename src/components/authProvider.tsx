"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const item = searchParams.get("param");

  useEffect(() => {
    if (session === null && pathname !== "/Login") {
      router.push(`/Login?next=${pathname}${item ? `?param=${item}` : ""}`);
    }
  }, [session, router, pathname]);

  return children;
}
