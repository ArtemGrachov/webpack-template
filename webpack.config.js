'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'dist')
}

module.exports = {
    context: PATHS.app,
    entry: './js/main.js',
    output: {
        path: PATHS.dist,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }]
        }, {
            test: /\.pug$/,
            use: ['html-loader', 'pug-html-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pages/index/index.pug'
        })
    ]
}