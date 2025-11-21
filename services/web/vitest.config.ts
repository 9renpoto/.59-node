import path from "node:path";
import preact from "@preact/preset-vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  root: __dirname,
  plugins: [preact()],
  server: {
    fs: {
      allow: [__dirname, path.resolve(__dirname, "../../")],
    },
  },
  test: {
    reporters: [["junit", { outputFile: path.resolve(__dirname, "junit.xml") }]],
    environment: "happy-dom",
    globals: true,
    setupFiles: path.resolve(__dirname, "src/tests/setup.ts"),
    deps: {
      inline: [/packages\/ui\//],
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      allowExternal: true,
      exclude: ["**/*.stories.*"],
    },
    include: ["src/tests/**/*.test.tsx"],
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
