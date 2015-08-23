var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var path = require('path');

var webpackCfg = {
    context: path.join(__dirname, 'public'),
    entry: './main.jsx',
    devtool: '#eval-source-map',
    debug: true,
    output: {
        path: path.join(__dirname, 'static'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },

            //Stuff needed to load bootstrap css via webpack
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.woff$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2$/,   loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    }
};
var compiler = webpack(webpackCfg);

var browserSync = require("browser-sync").create();

browserSync.init({
    server: {
        baseDir: "public",
        index: "index.html"
    },
    files: ["public/index.html", "public/**/*.js", "public/**/*.jsx", "public/**/*.css"],
    middleware: [
        webpackDevMiddleware(compiler, {
            publicPath: webpackCfg.output.publicPath
        })
    ]
});