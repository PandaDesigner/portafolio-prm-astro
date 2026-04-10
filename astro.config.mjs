import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio.local',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
