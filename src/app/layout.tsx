import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import QueryProvider from "@/components/queryProvider";
import AuthProvider from "@/components/authProvider";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";

const vimamsa = localFont({
  src: "../../public/assets/fonts/SOV_Vimamsa.ttf",
  variable: "--font-vimamsa",
});

export const metadata: Metadata = {
  title: "Passport Larngear",
  description: "Passport for Larngear camp",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${vimamsa.variable}`}>
      <body>
        <QueryProvider>
          <SessionProvider>
            <AuthProvider>
              <div className="relative h-full min-h-screen w-full md:mx-auto md:max-w-[25rem]">
                {children}
              </div>
            </AuthProvider>
          </SessionProvider>
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
