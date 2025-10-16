import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// Astro config for DJ Bjornos site
// - Tailwind for styling with custom dark theme
// - MDX for blog posts in /src/content/blog
// - TypeScript enabled via tsconfig.json (to be added)

export default defineConfig({
  // Update this to the real production URL when deploying
  site: "https://bjornos.example",
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false // We'll define our own base styles via Tailwind CSS file
    })
  ]
});
