export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust this if you use path aliases
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js", // Mock CSS files
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock image files
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};
