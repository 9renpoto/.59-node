import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageReporters: ["json", ["lcov", { projectRoot: "../../" }]],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};

export default config;
