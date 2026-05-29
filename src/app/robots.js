import { profile } from "@/data/profile";

export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
