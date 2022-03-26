import type { Config } from "@jest/types";
import nextJest from "next/jest";

const createJestConfig = nextJest({});
const config: Config.InitialOptions = {
  collectCoverage: true,
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
