const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
// const ASSETS_DIR = path.resolve(__dirname, 'src/assets');
// const STYLE_DIR = path.resolve(__dirname, 'src/assets/styles');
const MODULES_DIR = path.resolve(__dirname, './node_modules');

const development =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
  mode: development ? 'development' : 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]_[hash].js',
    pathinfo: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules', 'src'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
          minSize: 30000,
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  devtool: development ? 'eval-source-map' : '',
  module: {
    rules: [
      // Rules for ES6+ transpiling
      {
        test: /\.js$/,
        include: APP_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              presets: [
                'react',
                [
                  'env',
                  {
                    modules: false,
                    loose: true,
                    targets: {
                      uglify: true,
                      browsers: ['> 1%', 'last 7 Chrome versions'],
                    },
                  },
                ],
              ],
              plugins: [
                ['transform-object-rest-spread', { useBuiltIns: true }],
                'babel-plugin-dynamic-import-webpack',
                ...(development ? ['react-hot-loader/babel'] : []),
              ],
            },
          },
        ],
      },
      // Rules for CSS modules
      {
        test: /\.css$/,
        include: [MODULES_DIR, APP_DIR],
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      // Rules for assets
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|ico)$/,
        include: [MODULES_DIR],
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    ...(development
      ? [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin(),
        ]
      : []),
  ],
  ...(development
    ? {
        devServer: {
          hot: true,
          historyApiFallback: true,
        },
      }
    : {}),
};
