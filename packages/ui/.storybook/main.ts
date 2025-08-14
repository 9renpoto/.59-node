import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/preact-vite";
import { mergeConfig } from "vite";
import turbosnap from "vite-plugin-turbosnap";

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

  async viteFinal(config, { configType }) {
    const isProduction = configType === "PRODUCTION";

    return mergeConfig(config, {
      plugins: isProduction
        ? [turbosnap({ rootDir: config.root ?? process.cwd() })]
        : [],
    });
  },
};

export default config;

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
