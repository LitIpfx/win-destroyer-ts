const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './demo/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: (pathData) => {
      const filepath = path.dirname(String(pathData.filename)).split('/').slice(1).join('/');
      return `${filepath}/[name][ext]`;
    },
    clean: true,
  },
  optimization: {
    minimize: false,
  },
  devServer: {
    open: true,
    hot: true,
    host: 'localhost',
    port: 9000,
  },
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
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
