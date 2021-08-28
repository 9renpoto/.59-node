import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverage: true,
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};

export default config;
