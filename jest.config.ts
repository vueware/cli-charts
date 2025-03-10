import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  rootDir: "./src", // optioneel, kan je aanpassen afhankelijk van je structuur
};

export default config;
