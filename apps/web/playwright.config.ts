import { defineConfig, devices } from "@playwright/test";
import path from "path";

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000;

const baseURL = `http://localhost:${PORT}`;

// Reference: https://playwright.dev/docs/test-configuration
export default defineConfig({
  timeout: 30 * 1000,
  testDir: path.join(__dirname, "e2e"),
  retries: 2,
  outputDir: "test-results/",

  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL,
    trace: "retry-with-trace",
  },

  projects: [
    {
      name: "Mobile Chrome",
      use: {
        ...devices["iPhone 13 Mini"],
      },
    },
  ],
});
