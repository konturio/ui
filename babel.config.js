module.exports = function babelConfig(api) {
  api.cache.forever();
  return {
    babelrcRoots: [
      '.',
      './k2-apps/*',
      './k2-packages/*'
    ],
    presets: [
      [
        '@babel/env',
        {
          modules: false,
          useBuiltIns: 'usage',
          corejs: "3.1.3",
          targets: {
            browsers: ['> 1%'],
          },
        },
      ],
      '@babel/typescript',
      '@babel/react',
    ],
    plugins: [
      '@babel/syntax-dynamic-import',
      '@babel/plugin-proposal-object-rest-spread',
    ],
    env: {
      test: {
        presets: [
          [
            '@babel/env',
            {
              useBuiltIns: 'usage',
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
