import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    serviceLevel: z.string(),
    problem: z.string(),
    solution: z.string(),
    scope: z.string(),
    technologies: z.array(z.string()),
    coverImage: z.string(),
    coverImageAlt: z.string(),
    galleryImages: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .default([]),
    published: z.boolean(),
    featured: z.boolean(),
    isDemo: z.boolean(),
    order: z.number(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

export const collections = { projects };
