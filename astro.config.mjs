// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kuroki.example.com',
  integrations: [sitemap()],
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
