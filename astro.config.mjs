import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-supabase-auth.netlify.app",
  // output: "server",
  adapter: vercel(),
  integrations: [tailwind(), solidJs()],
  // adapter: netlify({// edgeMiddleware: true})
});