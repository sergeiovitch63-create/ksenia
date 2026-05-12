import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Индивидуальная фотосессия — Ксения Кошка",
  description: "Индивидуальная фотосессия · Ксения Кошка · Калининград",
};

export default function IndividualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
