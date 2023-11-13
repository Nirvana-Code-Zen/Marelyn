/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  collectCoverage: true,
  preset: 'ts-jest',
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "jest-styled-components"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "^@modules/(.*)$": "<rootDir>/src/modules/$1",
    "^~UI/(.*)$": "<rootDir>/src/UI/$1",
    "^~Components/(.*)$": "<rootDir>/src/UI/Components$1",
    "^~Pages/(.*)$": "<rootDir>/src/UI/Pages$1"
  },
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  }
};

/* eslint-disable-next-line import/no-default-export */
export default config;
