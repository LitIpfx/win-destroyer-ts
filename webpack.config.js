const path = require('path');
// const webpack = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
// const getPackageJson = require('./scripts/getPackageJson');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// const { version, name, license, repository, author } = getPackageJson(
//   'version',
//   'name',
//   'license',
//   'repository',
//   'author'
// );

// const banner = `
//   ${name} v${version}
//   ${repository.url}
//   Copyright (c) ${author.replace(/ *<[^)]*> */g, ' ')} and project contributors.
//   This source code is licensed under the ${license} license found in the
//   LICENSE file in the root directory of this source tree.
// `;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'win-destroyer-ts',
    libraryTarget: 'umd',
    clean: true,
    assetModuleFilename: (pathData) => {
      const filepath = path.dirname(String(pathData.filename)).split('/').slice(1).join('/');
      return `${filepath}/[name][ext]`;
    },
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({ extractComments: false }),
  //     new OptimizeCSSAssetsPlugin({
  //       cssProcessorOptions: {
  //         map: {
  //           inline: false,
  //         },
  //       },
  //     }),
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.(m|j|t)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { sourceMap: true } }],
      },
      {
        test: /\.(png|webm)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
    }),
    // new webpack.BannerPlugin(banner),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
