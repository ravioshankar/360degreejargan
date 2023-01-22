import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import smartypants from 'remark-smartypants'
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './remark-reading-time.mjs';
// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
    drafts: true,
    extendDefaultPlugins: true,
    remarkPlugins: [remarkToc, rehypeAccessibleEmojis, smartypants, remarkReadingTime],
    rehypePlugins: [
      rehypeHeadingIds]
  },

  integrations: [tailwind(), sitemap(), prefetch(), mdx({
    drafts: true
  })]
});