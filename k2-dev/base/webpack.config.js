const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    symlinks: true,
  },
  devServer: {
    port: 8080,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
    },
  },
};
