import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    modifiedDate: z.coerce.date().optional(),
    author: z.string().default('Equipo Atenas'),
    category: z.enum(['Normativa', 'Tecnología', 'Casos de éxito', 'Tips de seguridad', 'Empresa', 'Eventos']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
    }).optional(),
  }),
});

const servicios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number().default(0),
    features: z.array(z.string()).optional(),
    sectors: z.array(z.string()).optional(),
    image: z.string().optional(),
    seo: z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { noticias, servicios };
