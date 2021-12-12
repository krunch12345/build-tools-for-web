const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    entry: resolve('src', './js/main.js'),
    output: {
        filename: 'main.[contenthash].js',
        clean: true
    },
    module:{
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use: 'file-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    devServer: {
        port: 9000
    },
}
