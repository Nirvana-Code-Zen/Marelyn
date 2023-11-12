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
    "jest-styled-components",
    "<rootDir>/setupTest.js"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
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
