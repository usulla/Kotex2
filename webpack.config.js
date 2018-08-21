const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react', 'es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                        loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]'
                    },
                    {
                        loader: 'file-loader?name=./assets/fonts/Roboto/[name].[ext]'
                    }
                ]
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    inline: false,
                    warnings: false,
                    drop_console: true,
                    unsafe: true
                },
                minimize: true
            }
        })
    ]
};