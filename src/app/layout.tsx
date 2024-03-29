import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softmax",
  description: "Online School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <Head>
          <link rel="shortcut icon" href="./favicon.png" />
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
