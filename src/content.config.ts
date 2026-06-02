import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogMetaSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: blogMetaSchema,
});

const blogCs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cs/blog' }),
  schema: blogMetaSchema,
});

export const collections = { blog, blogCs };