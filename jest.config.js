module.exports = {
  verbose: true,
  collectCoverage: true,
  rootDir: './',
  collectCoverageFrom: [
    'src/*.js', 'src/**/*.js', 'src/**/**/*.js'
  ],
  modulePaths: [
    '<rootDir>/src', '<rootDir>/node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'css',
    'scss'
  ],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40
    }
  },
  coverageDirectory: 'cover',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
