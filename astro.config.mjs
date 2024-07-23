import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site:"https://diocal.github.io",
  base: '/Agency/',
  integrations: [, ],
  output: 'static',
  server: {
    port: 4321,
    hostname:'localhost',
    open:true,
  },
});
