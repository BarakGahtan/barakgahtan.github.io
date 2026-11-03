import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Barak Gahtan: running',
    description: 'Posts on the science of running: shoes, VO2, lactate and nutrition.',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      description: p.data.description,
    })),
  });
}
