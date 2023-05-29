const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_1',
      filename: 'remoteEntry.js',
      exposes: {
        './MFE1Index': './src/bootstrap',
      },
      shared: ['@faker-js/faker', 'react', 'react-dom', 'css-loader'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    //     new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: 'static/css/[name].[contenthash:8].css',
    //   chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.css$/,
        // exclude: cssModuleRegex,
        use: getStyleLoaders(),
        // sideEffects: true,
      },
    ],
  },
  devServer: {
    port: 8001,
  },
};

function getStyleLoaders(cssOptions, preProcessor) {
  return [
    { loader: 'style-loader' },
    // isEnvProduction && {
    //   loader: MiniCssExtractPlugin.loader,
    //   // css is located in `static/css`, use '../../' to locate index.html folder
    //   // in production `paths.publicUrlOrPath` can be a relative path
    //   options: paths.publicUrlOrPath.startsWith('.')
    //     ? { publicPath: '../../' }
    //     : {},
    // },
    {
      loader: 'css-loader',
      // options: {
      //   importLoader: 1,
      //   localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
      //   modules: true,
      // },
    },
  ];
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
