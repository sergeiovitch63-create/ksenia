import type { Metadata } from "next";
import "./avis.css";

export const metadata: Metadata = {
  title: "Оставить отзыв — Ксения Кошка",
  description: "Поделитесь впечатлениями о съёмке",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
