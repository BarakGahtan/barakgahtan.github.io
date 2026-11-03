import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Keep the file name as the id so old URLs such as /publication/UsingDeepReinforcement survive.
const keepName = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

const publications = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/publications', generateId: keepName }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    venue_short: z.string(),
    year: z.number().int(),
    status: z.enum(['published', 'preprint']),
    featured: z.boolean().default(false),
    order: z.number(),
    takeaway: z.string().optional(),
    excerpt: z.string().optional(),
    arxiv: z.url().optional(),
    paperurl: z.url().optional(),
    pdf: z.string().optional(),
    thumbnail: z.string().optional(),
    tile: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts', generateId: keepName }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

export const collections = { publications, posts };
