'use strict';
//引用模块
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');//加样式游览器兼容前缀
//打包入口
var entries = {
        zc:[
                'webpack/hot/dev-server', //热部署插件
                'webpack-hot-middleware/client?reload=true',
                './zc/app.js'
        ]
};
module.exports = {
        devtool: 'eval',
        // context: path.join(__dirname, 'app', 'js'),

        entry: entries,

        output: {
                path: __dirname + '/__build__',
                filename: '[name].bundle.js',
                chunkFilename: '[id].chunk.js',
                publicPath: '/__build__/'
        },

        resolve: {
                alias: {
                        'amazeui-react': path.join(__dirname, '../dist/amazeui.react.min.js')
                }
        },

        plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin()
        ],

        resolveLoader: {
                root: path.join(__dirname, '../node_modules')
        },

        module: {
                loaders: [
                        {
                                test: /\.js$/,
                                loaders: ['react-hot', 'babel'],
                                include: [
                                        path.join(__dirname, '../src'),
                                        path.join(__dirname, 'admin'),
                                        path.join(__dirname, 'zc')
                                ]
                        },
                        {
                                test: /\.less$/,
                                loaders: [
                                        'style',
                                        'css',
                                        'postcss',
                                        'less'
                                ],
                                include: [
                                        path.join(__dirname, 'admin')
                                ]
                        }
                ]
        },

        postcss: [autoprefixer({browsers: ['> 1%', 'last 2 versions']})]
};
