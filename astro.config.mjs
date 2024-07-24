import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'server',
  adapter: cloudflare()
});