import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  site:"https://diocal.github.io",
  integrations: [, ],
  output: 'server',
  adapter:node(),
  server: {
    port: 4321,
    hostname:'localhost',
    open:true,
  },
});
