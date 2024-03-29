require('./config')
const { createBackendServer }  = require('./common')
const path = require('path')
const express = require('express')
const webpack = require('webpack');
const webpackConfig = require('../../webpack-dev.config.js')
const compiler = webpack(webpackConfig);

const app = express()
app.use(require("webpack-dev-middleware")(compiler, {}));
app.use(require("webpack-hot-middleware")(compiler));
app.use('*', (req, res, next) => {
    const filename = path.resolve(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
});

app.listen(3000, () => console.log('production server listening on port 3000'))

const server = createBackendServer({secret: 'development-secret'})
server.listen(8080, () => console.log('development server listening on port 8080'))

// The payments test webpage must be served on the dev server
server.use('/stripe_test', express.static(__dirname + '/test_stripe_client'));
