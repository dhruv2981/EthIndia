import React from "react";
import "./styles/globals.css";
import type { Metadata } from "next";
import "@coinbase/onchainkit/styles.css";
import { Inter } from "next/font/google";
import AppProvider from "./components/providers";
import { Providers } from "./coinbaseProviders";

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Okto React SDK",
  description: "Okto React SDK",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppProvider session={session}>{children}</AppProvider>
        </Providers>
      </body>
    </html>
  );
}
