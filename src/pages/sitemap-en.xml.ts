import { APIContext } from 'astro';

const baseUrl = 'https://fran-garcia-lopez.com';

const projects = [
  { id: 1, lastmod: '2025-03-08' },
  { id: 2, lastmod: '2025-03-07' },
  { id: 3, lastmod: '2025-03-06' }
];

export async function GET({ request }: APIContext) {
  const urls = [
    {
      loc: `${baseUrl}/en`,
      lastmod: '2025-03-08',
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/en/work`,
      lastmod: '2025-03-08',
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/en/about`,
      lastmod: '2025-03-08',
      changefreq: 'weekly',
      priority: 0.9
    },
    ...projects.map((project) => ({
      loc: `${baseUrl}/en/projects/${project.id}/`,
      lastmod: project.lastmod,
      changefreq: 'weekly',
      priority: 0.8
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>
`
  )
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
}
