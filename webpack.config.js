const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'bundle.js',
        publicPath: "/dist"
    },
    watch: true,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env"]]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: 'localhost',
          port: 5000,
          files: ['./dist/*.html'],
          server: { baseDir: ['dist'] }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}