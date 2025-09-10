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
    ssr: {
      external: ["@app/ui"],
    },
  },
});
