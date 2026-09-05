import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://b24039971.github.io',
  base: '/tropoklad-lab',
  build: {
    format: 'directory'
  }
});

