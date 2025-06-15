module.exports = {
  testEnvironment: "jsdom",
   transformIgnorePatterns: [
    "node_modules/(?!react-router-dom/)"
  ],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    '\\.(jpg|jpeg|png|gif|svg|PNG)$': '<rootDir>/__mocks__/fileMock.js'
  },
};
