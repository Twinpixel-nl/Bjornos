import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  // Zet dit óf op je echte URL óf laat het voorlopig weg.
  // Bij onjuiste waarde kunnen absolute asset-URLs breken.
  site: "https://bjornos.nl",

  output: "static",            // ← belangrijk voor Netlify (geen SSR)
  trailingSlash: "never",

  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false })
  ]
});
