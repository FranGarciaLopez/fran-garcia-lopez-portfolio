import { SitemapStream, streamToPromise } from "sitemap";

export async function get() {
  const sitemap = new SitemapStream({
    hostname: "https://fran-garcia-lopez.com", // Your site's base URL
  });

  const sitemapData = [
    { url: "/es", lastmod: "2025-03-07", changefreq: "daily", priority: 1.0 },
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

  // Add each URL to the sitemap
  sitemapData.forEach((urlData) => {
    sitemap.write(urlData);
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap);

  return {
    body: xml.toString(),
    headers: {
      "Content-Type": "application/xml",
    },
  };
}
