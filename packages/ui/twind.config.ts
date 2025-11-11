import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  ignorelist: [/^sb-/],
  theme: {
    extend: {
      colors: {
        // This color is added to fix a Storybook test error.
        // The error is `ReferenceError: Cannot access 'blue' before initialization`.
        blue: "#0000ff",
      },
    },
  },
  // Preflight is enabled to fix a Storybook test error.
  preflight: true,
});
