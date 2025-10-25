import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robots from "@astrojs/robots";

export default defineConfig({
  site: "https://bjornos.nl",   // nodig voor correcte canonical & sitemap-urls
  output: "static",             // vereist voor Netlify Forms
  trailingSlash: "never",

  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),

    // Genereert /sitemap.xml (of /sitemap-index.xml als er meerdere zijn)
    sitemap({
      // Sluit optioneel pagina’s uit (voorbeeld: bedanktpagina)
      exclude: ["/contact/success"],
      // (Optioneel) i18n voorbeeld — uitzetten als je geen meertaligheid gebruikt
      // i18n: { defaultLocale: "nl", locales: { nl: "nl" } },
    }),

    // Genereert /robots.txt met automatisch sitemap-verwijzing
    robots({
      host: "https://bjornos.nl",
      sitemap: true, // voegt "Sitemap: https://bjornos.nl/sitemap.xml" toe
      policy: [{ userAgent: "*", allow: "/" }],
    }),
  ],

  vite: {
    build: { chunkSizeWarningLimit: 1500 },
  },
});
