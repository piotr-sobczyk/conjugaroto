//
// Webpack configuration
//

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

//
// Express application
//

var express = require('express');
var app = express();

var questions = require('./data/questions.json');

app.use(express.static(__dirname + '/public'));

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackCfg.output.publicPath
}));

app.get('/questions', function (req, resp) {
    resp.json(questions);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});

//
//Config of browser-sync serving as a proxy for express app
//

var browserSync = require("browser-sync").create();

browserSync.init({
    proxy: 'http://localhost:3000',
    port: 4000,
    files: ["public/index.html", "public/**/*.js", "public/**/*.jsx", "public/**/*.css"],
});