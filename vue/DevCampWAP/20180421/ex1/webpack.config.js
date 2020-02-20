var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    devtool: "cheap-eval-source-map",
    devServer: {
        publicPath: "/dist/",
        port: 9000
    },
};

/*
// css 분리실습 
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            // Comment this out to load ExtractTextPlugin
            // use: ['style-loader', 'css-loader']
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}
*/