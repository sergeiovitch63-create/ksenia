import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Съёмка лав-стори — Ксения Кошка",
  description: "Съёмка лав-стори · Ксения Кошка · Калининград",
};

export default function LoveStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
