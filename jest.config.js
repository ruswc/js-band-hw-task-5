module.exports = {
  verbose: true,
  collectCoverage: true,
  rootDir: './',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/helpers/**',
    '!**/root/**',
    '!**/config/**',
    '!**/cover/**',
    '!**/coverage/**',
    '!**/forms/**',
    '!**/jest/**',
    '!**/view/**',
    '!jest.config.js',
    '!LocalStorage.js'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'css',
    'scss'
  ],
  coverageThreshold: {
    global: {
      branches: 38,
      functions: 32,
      lines: 47,
      statements: 44
    }
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
