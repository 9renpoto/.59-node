import type { StorybookConfig } from "@storybook/preact-vite";
import { mergeConfig } from "vite";
import turbosnap from "vite-plugin-turbosnap";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-coverage",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/preact-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  builder: "@storybook/builder-vite",

  async viteFinal(config, { configType }) {
    const isProduction = configType === "PRODUCTION";

    return mergeConfig(config, {
      plugins: [
        tsconfigPaths(),
        ...(isProduction
          ? [turbosnap({ rootDir: config.root ?? process.cwd() })]
          : []),
      ],
    });
  },
};

export default config;
