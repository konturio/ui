const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, '/k2-packages/'),
  verbose: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  collectCoverage: true
};
