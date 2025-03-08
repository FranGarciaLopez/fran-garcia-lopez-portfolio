import { APIContext } from 'astro';

const baseUrl = 'https://fran-garcia-lopez.com';

const projects = [
  { id: 1, lastmod: '2025-03-08' },
  { id: 2, lastmod: '2025-03-07' },
  { id: 3, lastmod: '2025-03-06' }
];

export async function GET({ request }: APIContext) {
  const urls = [
    // Static pages
    {
      loc: `${baseUrl}/es`,
      lastmod: '2025-03-08',
      changefreq: 'daily',
      priority: 1.0,
      alternates: [
        { hreflang: 'en', href: `${baseUrl}/en` },
        { hreflang: 'es', href: `${baseUrl}/es` }
      ]
    },
    {
      loc: `${baseUrl}/es/#work`,
      lastmod: '2025-03-08',
      changefreq: 'monthly',
      priority: 0.8,
      alternates: [
        { hreflang: 'en', href: `${baseUrl}/en/#work` },
        { hreflang: 'es', href: `${baseUrl}/es/#work` }
      ]
    },
    {
      loc: `${baseUrl}/es/#about`,
      lastmod: '2025-03-08',
      changefreq: 'weekly',
      priority: 0.9,
      alternates: [
        { hreflang: 'en', href: `${baseUrl}/en/#about` },
        { hreflang: 'es', href: `${baseUrl}/es/#about` }
      ]
    },
    // Dynamic project pages
    ...projects.map((project) => ({
      loc: `${baseUrl}/es/projects/${project.id}/`,
      lastmod: project.lastmod,
      changefreq: 'weekly',
      priority: 0.8,
      alternates: [
        { hreflang: 'en', href: `${baseUrl}/en/projects/${project.id}/` },
        { hreflang: 'es', href: `${baseUrl}/es/projects/${project.id}/` }
      ]
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    ${url.alternates
      .map(
        (alt) => `
    <xhtml:link 
      rel="alternate" 
      hreflang="${alt.hreflang}" 
      href="${alt.href}" />
    `
      )
      .join('')}
  </url>
`
  )
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
