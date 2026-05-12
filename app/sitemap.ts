import type { MetadataRoute } from "next";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ksenia-koshka.example.com";

const SEMKI = [
  "portret",
  "semya",
  "lav-stori",
  "deti",
  "ulitsa",
  "individualnaya",
  "beremennost",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const seanceUrls = SEMKI.map((slug) => ({
    url: `${SITE}/semki/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/otzyv`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...seanceUrls,
  ];
}
