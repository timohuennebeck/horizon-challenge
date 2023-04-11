module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.svg$": "jest-transform-stub",
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
