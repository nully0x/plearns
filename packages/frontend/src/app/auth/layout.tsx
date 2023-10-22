import TopBar from "@/components/auth/Topbar";
import Plearn from "@/components/common/Plearn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Join PLEarn",
  description: "Task rewards - Complete Tasks, Get Paid",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopBar />
      <div className="flex w-full items-center mt-24 justify-center flex-col">
        <Plearn />
        {children}
      </div>
    </section>
  );
}
