module.exports = {
  automock: false,
  setupFiles: ['./.jest/jest.setup.js'],
  setupFilesAfterEnv: ['./.jest/jest.setup.after-env.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/.jest/file-mock.js',
    '\\.(styl|css)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '.+\\.(css|styl)$': 'jest-css-modules-transform',
  },
  testPathIgnorePatterns: ['/tsclib/'],
};
