import { defineCollection, z } from 'astro:content';

// Blog/Research posts collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(['pqc', 'ebpf', 'ai', 'general']),
    tags: z.array(z.string()).default([]),
    author: z.string().default('CurioxityLabs'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Lab notes collection
const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date(),
    category: z.enum(['pqc', 'ebpf', 'ai', 'general']),
    status: z.enum(['success', 'in-progress', 'experimental']).default('success'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, notes };
