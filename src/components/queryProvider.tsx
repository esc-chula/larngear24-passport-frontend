"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState<QueryClient>(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
