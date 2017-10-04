'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
    filename: 'main.css'
})

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
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/'
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
}