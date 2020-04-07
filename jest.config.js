module.exports = {
  automock: false,
  setupFiles: [
    './setupJest.js'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/.jest/file-mock.js',
    '\\.(styl|css)$': 'identity-obj-proxy'
  },
  'moduleDirectories': [
    'node_modules',
  ],
  // 'projects': [
  //   '<rootDir>/k2-packages/',
  //   '<rootDir>/k2-dev/'
  // ],
  verbose: true,
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '.+\\.(css|styl)$': 'jest-css-modules-transform'
  },
  // 'testRegex': '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  // 'moduleFileExtensions': [
  //   'ts',
  //   'tsx',
  //   'js',
  //   'jsx',
  //   'json'
  // ],
  testPathIgnorePatterns: ['/tsclib/'],
};
