const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const DLL_PATH = '../dll/dist';
const ALPHA_MANIFEST = DLL_PATH + '/alpha-manifest.json';
const BETA_MANIFEST = DLL_PATH + '/beta-manifest.json';
const ASSET_MANIFEST = DLL_PATH + '/asset-manifest.json';
const ALPHA_JS = 'alpha.js';
const BETA_JS = 'beta.js';
const DLL_TMP_PATH = 'dll';

module.exports = {
  mode: 'development' && 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    beta: ['./example'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'output-[hash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: `${DLL_PATH}/*.dll.*`,
        to: `./${DLL_TMP_PATH}/`,
      },
    ]),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..', 'dll'),
      manifest: require(ALPHA_MANIFEST), // eslint-disable-line
    }),
    new webpack.DllReferencePlugin({
      scope: 'beta',
      manifest: require(BETA_MANIFEST), // eslint-disable-line
      extensions: ['.js', '.jsx'],
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new HtmlWebpackPlugin({
      inject: true, // will inject the main bundle to index.html
      template: './example.html',
      templateParameters: (compilation, assets, assetTags, options) => {
        let manifest = fs.readFileSync(`${DLL_PATH}/asset-manifest.json`);
        manifest = JSON.parse(manifest.toString());

        const dlls = [
          // prettier-ignore
          `dll/dist/${manifest[ALPHA_JS]}`,
          `dll/dist/${manifest[BETA_JS]}`,
        ];
        // fs.writeFileSync('../../tempLog.json', JSON.stringify(js));

        return {
          compilation,
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            tags: assetTags,
            files: assets,
            // files: {
            //   ...assets,
            //   // prettier-ignore
            //   publicPath:'./dist',
            //   js: js,
            // },
            options,
          },
          dlls,
        };
      },
    }),
  ],
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
