import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.el42.cc',
  integrations: [
      react(),
      tailwind({
        applyBaseStyles: false
      }),
      mdx(),
      sitemap()
  ]
})