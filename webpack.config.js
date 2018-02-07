const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
});

module.exports = {
    entry: {
        index: './static/entries/index.js',
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
            },
            {
                test: /\.(png|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
            },
            {
                test: /\.mustache$/,
                exclude: /node_modules/,
                loader: 'mustache-loader',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './static/templates/index.mustache',
            chunks: ['index'],
        }),
        devFlagPlugin,
    ],
};
