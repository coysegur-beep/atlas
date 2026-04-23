import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/lib/config';

export async function GET(context) {
  const noticias = await getCollection('noticias', ({ data }) => !data.draft);
  
  return rss({
    title: `${SITE.name} — Sala de prensa`,
    description: 'Noticias, normativas y casos de éxito del sector seguridad privada en Colombia.',
    site: context.site,
    items: noticias
      .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
      .map((noticia) => ({
        title: noticia.data.title,
        description: noticia.data.description,
        pubDate: noticia.data.publishDate,
        author: noticia.data.author,
        categories: [noticia.data.category],
        link: `/noticias/${noticia.slug}`,
      })),
    customData: `<language>es-CO</language><copyright>© ${new Date().getFullYear()} ${SITE.name}</copyright>`,
  });
}
