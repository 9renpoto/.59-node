import preact from "@astrojs/preact";
import { defineConfig } from "astro/config";
import codecovAstroPlugin from "@codecov/astro-plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    codecovAstroPlugin({
      enableBundleAnalysis: true,
      bundleName: "app-web",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
});
