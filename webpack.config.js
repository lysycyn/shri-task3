const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';


const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
});

const paths = {
  build: 'build',
  html: '/src/templates',
  script: '/src/script'
}

module.exports = {
  entry: {
    'index': './src/script/index.js',
    'main': './src/script/main.js',
    'new_meeting': './src/script/new_meeting.js',
    'edit_meeting': './src/script/edit_meeting.js',
    'modal_success': './src/script/modal_success.js',
    'modal_cancel': './src/script/modal_cancel.js',
  },
  output: {
    path: path.resolve('./build'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loader: 'handlebars-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: './build',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    compress: true,
    port: PORT,
    host: HOST,
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: './src/assets/avatars',
        to: 'assets/',
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/index.hbs',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: './src/templates/main.hbs',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'new_meeting.html',
      template: './src/templates/new_meeting.hbs',
      chunks: ['new_meeting']
    }),
    new HtmlWebpackPlugin({
      filename: 'edit_meeting.html',
      template: './src/templates/edit_meeting.hbs',
      chunks: ['edit_meeting']
    }),
    new HtmlWebpackPlugin({
      filename: 'modal_success.html',
      template: './src/templates/modal_success.hbs',
      chunks: ['modal_success']
    }),
    new HtmlWebpackPlugin({
      filename: 'modal_cancel.html',
      template: './src/templates/modal_cancel.hbs',
      chunks: ['modal_cancel']
    }),
    devFlagPlugin,
  ],
};
