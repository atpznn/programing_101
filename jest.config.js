module.exports = {
  preset: "ts-jest", // Use ts-jest as the preset
  testEnvironment: "node", // Or 'jsdom' for browser-like environment
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"], // Match test files
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
