import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const world = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/world' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // 哪套视觉模板:base / wasteland / seaside / blog
    layout: z.enum(['base', 'wasteland', 'seaside', 'blog']).default('base'),
    // 分类提示:region / character / story / misc
    kind: z.enum(['region', 'character', 'story', 'misc']).default('misc'),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, world };
