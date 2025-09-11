import path from "node:path";
import preact from "@preact/preset-vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  root: path.resolve(__dirname, "../../"),
  plugins: [preact()],
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "services/web/src/tests/setup.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      include: ["packages/ui/src/LoginForm/LoginForm.tsx"],
    },
    include: ["services/web/src/tests/**/*.test.tsx"],
  },
  resolve: {
    alias: [
      {
        find: "@app/ui/LoginForm",
        replacement: path.resolve(
          __dirname,
          "../../packages/ui/src/LoginForm/LoginForm.tsx",
        ),
      },
      {
        find: "@app/ui/twind.config",
        replacement: path.resolve(
          __dirname,
          "../../packages/ui/twind.config.ts",
        ),
      },
    ],
  },
});
