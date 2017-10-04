'use strict';
const path = require('path');
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const sass = require('./webpack/sass');
const babel = require('./webpack/babel');
const pug = require('./webpack/pug');
const img = require('./webpack/img');

const PATHS = {
    app: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'dist')
}

module.exports = merge([{
        context: PATHS.app,
        entry: './js/main.js',
        output: {
            path: PATHS.dist,
            filename: 'bundle.js'
        },
        plugins: [
            new CleanWebpackPlugin(['dist'])
        ]
    },
    sass(),
    babel(),
    pug(),
    img()
])