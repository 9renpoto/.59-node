import type { Config } from "@jest/types";
import nextJest from "next/jest";

const createJestConfig = nextJest({});
const config: Config.InitialOptions = {
  collectCoverage: true,
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/**/*.stories.tsx",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
