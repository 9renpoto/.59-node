import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";

/**
 * @type {import('astro/types').Config}
 */
export default defineConfig({
  integrations: [preact()],
});
