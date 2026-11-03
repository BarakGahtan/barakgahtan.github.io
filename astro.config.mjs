// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import yaml from '@rollup/plugin-yaml';
import rehypeExternalLinks from 'rehype-external-links';

const ownSite = /^https?:\/\/(www\.)?barakgahtan\.com(\/|$)/;

/** @param {import("hast").Element} node */
const isForeignLink = (node) => typeof node.properties?.href === "string" && !ownSite.test(node.properties.href);

export default defineConfig({
  site: 'https://www.barakgahtan.com',
  integrations: [sitemap()],
  vite: { plugins: [yaml()] },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener'],
          test: isForeignLink,
        },
      ],
    ],
  },
  // Old Jekyll URLs that no longer exist as pages. Astro writes a meta-refresh page for each.
  redirects: {
    '/Academic/': '/cv/',
    '/teaching/': '/cv/',
    '/resume': '/cv/',
    '/FacultyMerit/': '/cv/#awards',
    '/VatatMerit/': '/cv/#awards',
    '/Reserve/': '/cv/#awards',
    '/contact/': '/#contact',
    '/about/': '/',
    '/about.html': '/',
    '/about_page/': '/about-page/',
    '/posts/': '/running/',
    '/talks/': '/running/',
    '/talks/2012-03-01-talk-1': '/blog/blog-1/',
    '/talkmap.html': '/',
    '/talkmap/map.html': '/',
    '/sitemap/': '/',
  },
});
