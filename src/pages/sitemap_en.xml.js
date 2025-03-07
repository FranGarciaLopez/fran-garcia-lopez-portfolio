import { Sitemap } from "@astro/sitemap";

export async function get() {
  const sitemapData = [
    {
      url: "/en",
      lastmod: "2025-03-07",
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: "/en/#projects",
      lastmod: "2025-03-07",
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: "/en/#about",
      lastmod: "2025-03-07",
      changefreq: "monthly",
      priority: 0.7,
    },
  ];

  return {
    body: Sitemap(sitemapData),
  };
}
