import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Семейная фотосессия — Ксения Кошка",
  description: "Семейная фотосессия · Ксения Кошка · Калининград",
};

export default function FamilyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
