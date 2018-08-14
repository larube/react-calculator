const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

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
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', 'src'],
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
              presets: ['react', 'env'],
              plugins: [
                ['transform-object-rest-spread', { useBuiltIns: true }],
                ...(development ? ['react-hot-loader/babel'] : []),
              ],
            },
          },
        ],
      },
      // Rules for CSS modules
      {
        test: /\.scss$/,
        include: [APP_DIR],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [APP_DIR],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
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
          open: true,
        },
      }
    : {}),
};
