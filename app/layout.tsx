import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-full`}>
        <aside className="w-64 p-4 hidden md:block bg-slate-50">
          <Sidebar />
        </aside>
        <main className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
          <Navbar />
          <main className="max-w-3xl mx-auto p-4">{children}</main>
        </main>
      </body>
    </html>
  );
}
