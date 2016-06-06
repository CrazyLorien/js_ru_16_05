var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'eval',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        historyApiFallback: true,
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }]
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'              
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' 
            }
        ]
    },
    watch: true,

    plugins : [
        new webpack.NoErrorsPlugin(), 
          new ExtractTextPlugin("style.css", {
            allChunks: true
        })
    ]
}