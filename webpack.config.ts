import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

// require.context('./src/css', true, /\.css$/);

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    assetModuleFilename: (pathData) => {
      const filepath = path.dirname(String(pathData.filename)).split('/').slice(1).join('/');
      return `${filepath}/[name][ext]`;
    },
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      //   {
      //     test: /\.css$/i,
      //     use: ['style-loader', 'css-loader'],
      //   },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|webm)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    //     {
    //   filename: '[name].[contenthash].css',
    // }
  ],
};

export default config;
