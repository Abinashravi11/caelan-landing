import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://caelan.care/sitemap.xml",
    host: "https://caelan.care",
  };
}
