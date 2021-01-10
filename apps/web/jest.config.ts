import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", ["lcov", { projectRoot: "../../" }]],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};

export default config;
