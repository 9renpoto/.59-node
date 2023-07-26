import type { Preview } from "@storybook/preact";
import { install } from "@twind/core";
import config from "../twind.config";

install(config);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
