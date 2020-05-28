const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        // 这里需要引用node里面的path来拼接成绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                // css-loader 负责加载CSS文件
                // style-loader 负责渲染到DOM中
                // 多个loader加载的时候 从右向左加载
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [
            '.js', '.css', '.vue'
        ]
    },
    plugins: [
        new webpack.BannerPlugin('所有权:Bohan'),
        new HtmlWebpackPlugin({
                template: 'index.html'
            }
        ),
        new UglifyjsWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        inline: true
    }
}
