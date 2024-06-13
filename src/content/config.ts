import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.string(),
    keywords: z.string(),
    tags: z.array(z.string()),
    image: z
      .object({
        path: z.string(),
        alt: z.string().optional(),
        width: z.number(),
        height: z.number(),
      })
      .optional(),
  }),
});

export const collections = { blog };
