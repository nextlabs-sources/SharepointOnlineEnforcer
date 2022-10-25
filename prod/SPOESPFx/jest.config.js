module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/src/**/*.test.+(ts|tsx|js)'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'cobertura'],
  coverageDirectory: '<rootDir>/jest',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
