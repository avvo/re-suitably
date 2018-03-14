module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.test.{js,jsx}",
    "!dist/**/*.{js,jsx}",
    "!example/**/*.{js,jsx}",
    "!.storybook/**/*.{js,jsx}"
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};
