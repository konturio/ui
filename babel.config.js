module.exports = function babelConfig(api) {
  api.cache.forever();
  return {
    babelrcRoots: [
      '.',
      './k2-dev/*',
      './k2-packages/*'
    ],
    presets: [
      [
        '@babel/env',
        {
          modules: false,
          useBuiltIns: 'usage', // 'usage' | 'entry' | false, defaults to false.
          corejs: '3',
          targets: {
            browsers: ['> 1%'],
          },
        },
      ],
      '@babel/typescript',
      '@babel/react',
    ],
    plugins: [
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
    ],
    env: {
      test: {
        plugins: ["dynamic-import-node"],
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'usage', // 'usage' | 'entry' | false, defaults to false.
              corejs: '3',
              targets: {
                browsers: ['> 1%'],
              },
            },
          ],
          '@babel/typescript',
          '@babel/react',
        ],
      },
    },
  };
};
