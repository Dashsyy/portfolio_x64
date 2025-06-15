// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://dashsyy.github.io',
  base: '/portfolio_x64',
  build: {
    assets: '_assets'
  }
});