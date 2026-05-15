import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Портретная фотосессия — Ксения Кошка",
  description: "Портретная фотосессия · Ксения Кошка · Калининград",
};

export default function PortraitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
