import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import "./global-effects.css";
import LoadingScreen from "@/components/LoadingScreen";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import CardTilt from "@/components/CardTilt";

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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ksenia-koshka.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ксения Кошка — Фотограф · Калининград",
    template: "%s · Ксения Кошка",
  },
  description:
    "Профессиональная фотосъёмка в Калининграде. Портрет, семья, лав-стори, дети, беременность. Все виды съёмок — одна цена.",
  keywords: [
    "фотограф",
    "Калининград",
    "фотосессия",
    "портретная съёмка",
    "семейная съёмка",
    "лав-стори",
    "беременность",
    "детская съёмка",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Ксения Кошка",
    title: "Ксения Кошка — Фотограф · Калининград",
    description:
      "Профессиональная фотосъёмка в Калининграде. Ловлю момент, создаю образ.",
    images: [
      {
        url: "/images/portait.PNG",
        width: 1200,
        height: 630,
        alt: "Ксения Кошка — Фотограф",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ксения Кошка — Фотограф · Калининград",
    description: "Профессиональная фотосъёмка в Калининграде.",
    images: ["/images/portait.PNG"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Ксения Кошка",
  description:
    "Профессиональный фотограф в Калининграде. Портретная, семейная, лав-стори, детская, уличная съёмка.",
  url: SITE_URL,
  image: `${SITE_URL}/images/portait.PNG`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Калининград",
    addressCountry: "RU",
  },
  priceRange: "1 500 ₽",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="ru"
        className={`${cormorant.variable} ${raleway.variable}`}
      >
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
          />
          <LoadingScreen />
          <Cursor />
          <ScrollProgress />
          <CardTilt />
          {children}
          <FloatingCTA />
        </body>
      </html>
    </ViewTransitions>
  );
}
