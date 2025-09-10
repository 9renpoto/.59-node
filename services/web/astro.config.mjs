import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";
// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  vite: {
    optimizeDeps: {
      include: ["@app/ui"],
    },
    resolve: {
      preserveSymlinks: true,
    },
    // Bundle the local workspace package into SSR build instead of externalizing.
    // This ensures Vercel doesn't try to resolve a private workspace package at runtime.
    ssr: {
      noExternal: ["@app/ui"],
    },
  },
});
