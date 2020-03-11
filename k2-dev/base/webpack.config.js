const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log('MODE:', process.env.NODE_ENV);
console.log('API:', process.env.API);

module.exports = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  devtool: "inline-source-map",
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
      'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
      'process.env.API': `'${process.env.API}'`,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
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
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[local]-[hash:base64:5]'
              }
            }
          }
        ]
      }
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
    },
  },
};
