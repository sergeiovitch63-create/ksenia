import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Детская фотосессия — Ксения Кошка",
  description: "Детская фотосессия · Ксения Кошка · Калининград",
};

export default function ChildrenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
