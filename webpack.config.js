const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin')
module.exports = {
    entry : './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode : 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: 'file-loader?name=./images/[name].[ext]'
                
            }, 
            {
                test: /\.(css)$/,
                use:[
                    {
                        loader : 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPLugin(
            {
                template: './public/index.html',
                filename: './index.html'
            }
        )
    ]
}