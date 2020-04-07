const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development' && 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: ['./index'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    // new HtmlWebpackPlugin({
    //   inject: true, // will inject the main bundle to index.html
    //   template: './example.html',
    //   templateParameters: (compilation, assets, assetTags, options) => {
    //     // let manifest = fs.readFileSync(`${DLL_PATH}/asset-manifest.json`);
    //     // manifest = JSON.parse(manifest.toString());
    //     //
    //     // const dlls = [
    //     //   // prettier-ignore
    //     //   `dll/dist/${manifest[ALPHA_JS]}`,
    //     //   `dll/dist/${manifest[BETA_JS]}`,
    //     //   `dll/dist/${manifest[VENDORS_JS]}`,
    //     // ];
    //     // fs.writeFileSync('../../tempLog.json', JSON.stringify(js));
    //
    //     return {
    //       compilation,
    //       webpackConfig: compilation.options,
    //       htmlWebpackPlugin: {
    //         tags: assetTags,
    //         files: assets,
    //         // files: {
    //         //   ...assets,
    //         //   // prettier-ignore
    //         //   publicPath:'./dist',
    //         //   js: js,
    //         // },
    //         options,
    //       },
    //     };
    //   },
    // }),
  ],
  externals: {
    // react: 'vendors react',
    // 'react-dom': 'vendors react-dom',
  },
  optimization: {
    minimize: true,
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        terserOptions: {
          parse: {
            // we want terser to parse ecma 8 code. However, we don't want it
            // to apply any minfication steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending futher investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: false,
        sourceMap: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules([\\/]lodash)[\\/]/,
          name: 'vendors',
          filename: 'static/[name]-[contenthash].js',
        },
        example: {
          test: /([\\/]example)/,
          name: 'example',
          filename: 'module/[name]-[contenthash].js',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
    ],
  },
};
