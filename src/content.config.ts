import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Case studies are structured fields, not free-form markdown, so every project
 * has to answer the same questions: what broke, and what did that teach you.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    code: z.string(),
    title: z.string(),
    summary: z.string(),
    status: z.enum(['live', 'building']),
    statusNote: z.string().optional(),
    period: z.string(),
    role: z.string(),
    users: z.string(),
    context: z.string().optional(),
    problem: z.array(z.string()),
    built: z.array(z.string()),
    decisions: z.array(z.object({ title: z.string(), body: z.string() })),
    broke: z.array(z.string()),
    learned: z.array(z.string()),
    stack: z.array(z.string()),
    stackSummary: z.array(z.string()),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.string().default('es'),
    published: z.boolean().default(true),
  }),
});

export const collections = { projects, notes };
