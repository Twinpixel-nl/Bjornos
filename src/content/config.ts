import { defineCollection, z } from "astro:content";

/**
 * Blogcollectie (MDX) in src/content/blog
 * - Maak nieuwe posts aan als .mdx met frontmatter:
 *   ---
 *   title: "Titel"
 *   description: "Korte teaser"
 *   date: 2025-01-01
 *   draft: false
 *   ---
 */
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(180),
    date: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  blog
};
