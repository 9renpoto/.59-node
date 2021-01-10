import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverage: true,
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};

export default config;
