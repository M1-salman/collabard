import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import CustomBackground from "@/components/custom-background";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: {
    default: "Collabard",
    template: "%s - Collabard",
  },
  description:
    "Experience the power of real-time video calls with collaborative meetings to enhance remote team interactions. Join or create a room instantly",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" className="dark">
        <body>
          <CustomBackground />
          <Nav />
          {children}
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
