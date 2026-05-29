import { profile } from "@/data/profile";

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
