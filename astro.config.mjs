// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dashsyy.github.io',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});