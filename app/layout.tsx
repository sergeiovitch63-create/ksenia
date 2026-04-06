import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ксения Кошка — Фотограф",
  description: "Фотограф · Калининград",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${raleway.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
