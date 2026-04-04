import type { Metadata } from "next";
import { Geist, Geist_Mono, Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
});

export const metadata: Metadata = {
  title: "Erasmiau",
  description: "Descripcion por hacer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-16">
      <Navbar />
      <main>{children}</main>
      </body>
    <Footer />
    </html>
  );
}
