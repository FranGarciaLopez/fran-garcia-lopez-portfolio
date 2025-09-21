// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://fran-garcia-lopez.com",
  integrations: [tailwind(), sitemap()],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100, // check every 100ms
      },
    },
  },
});
