const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('process.NODE_ENV:', process.env.NODE_ENV);
console.log('process.API:', process.env.API);

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  mode: process.env.NODE_ENV,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    symlinks: true,
  },
  devServer: {
    port: 8080,
    inline: true,
    quiet: false,
    noInfo: false,
    stats: {
      all: false,
      wds: true,
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '/dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API': JSON.stringify(process.env.API)
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css?[chunkhash]',
      chunkFilename: '[id].css?[chunkhash]'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(tsx?)|(ts?)$/,
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
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
    },
    minimize: false
  },
};
