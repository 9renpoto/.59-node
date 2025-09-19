import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/preact-vite";
import { mergeConfig } from "vite";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-coverage"),
    getAbsolutePath("@storybook/addon-docs"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/preact-vite"),
    options: {},
  },

  async viteFinal(config, _options) {
    const dedupe = Array.from(
      new Set([...(config.resolve?.dedupe ?? []), "preact", "preact/hooks"]),
    );

    const optimizeDepsInclude = Array.from(
      new Set([
        ...(config.optimizeDeps?.include ?? []),
        "preact",
        "preact/hooks",
      ]),
    );

    return mergeConfig(config, {
      resolve: {
        ...config.resolve,
        dedupe,
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: optimizeDepsInclude,
      },
    });
  },
};

export default config;

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
