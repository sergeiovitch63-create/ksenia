import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Уличная фотосессия — Ксения Кошка",
  description: "Уличная фотосессия · Ксения Кошка · Калининград",
};

export default function StreetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
