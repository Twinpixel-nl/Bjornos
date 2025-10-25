import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bjornos.nl",        // gebruikt voor canonical- en sitemap-URLs
  output: "static",                  // nodig voor Netlify (geen SSR)
  trailingSlash: "never",

  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),

    // Automatisch sitemap.xml genereren
    sitemap({
      // filter vervangt 'exclude' in nieuwe versies
      filter: (page) => page.pathname !== "/contact/success",
      // optioneel: pas aan als je meer dan 45k pagina's hebt
      entryLimit: 45000,
    }),
  ],

  vite: {
    build: { chunkSizeWarningLimit: 1500 },
  },
});
