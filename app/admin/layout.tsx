import type { Metadata } from "next";
import "./admin.css";

export const metadata: Metadata = {
  title: "Админ — Ксения Кошка",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
