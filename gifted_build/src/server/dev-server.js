const express = require('express');
const app = express();
const server = express();
const path = require('path')

const webpack = require('webpack');
const webpackConfig = require('../../webpack-dev.config.js')
const compiler = webpack(webpackConfig);

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

app.listen(3000, () => console.log('dev app listening on port 3000'))

server.use(require('./routes/products'));

server.listen(8080, () => console.log('backend server listening on port 8080'))
