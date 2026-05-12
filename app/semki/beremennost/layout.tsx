import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотосессия для беременных — Ксения Кошка",
  description: "Фотосессия для беременных · Ксения Кошка · Калининград",
};

export default function PregnancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
