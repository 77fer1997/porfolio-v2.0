// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://kuroki.com.pe';
const sitemapExcludedUrls = new Set([`${site}/mistiano/`, `${site}/la-red/`]);

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap({
      filter: (page) => !sitemapExcludedUrls.has(page),
    }),
  ],
  redirects: {
    '/proyectos': '/casos-de-exito',
    '/proyectos/klipp': '/casos-de-exito/klipp',
    '/proyectos/fortuna': '/casos-de-exito/sms-fortuna',
    '/proyectos/sms-fortuna': '/casos-de-exito/sms-fortuna',
    '/proyectos/botica': '/casos-de-exito/el-pueblo',
    '/proyectos/el-pueblo': '/casos-de-exito/el-pueblo',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': '/src/layouts',
        '@features': '/src/features',
        '@shared': '/src/shared',
        '@styles': '/src/styles',
      },
    },
  },
});
