import { Sitemap } from "@astro/sitemap";

export async function get() {
  const sitemapData = [
    {
      url: "/es",
      lastmod: "2025-03-07",
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: "/es/#projects",
      lastmod: "2025-03-07",
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: "/es/#about",
      lastmod: "2025-03-07",
      changefreq: "monthly",
      priority: 0.7,
    },
  ];

  return {
    body: Sitemap(sitemapData),
  };
}
