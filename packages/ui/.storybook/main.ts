import type { StorybookConfig } from "@storybook/preact-vite";
import { mergeConfig } from "vite";
import turbosnap from "vite-plugin-turbosnap";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
  ],
  framework: {
    name: "@storybook/preact-vite",
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
  docs: {
    autodocs: "tag",
  },
};

export default config;
