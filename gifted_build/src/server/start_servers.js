const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const sessionFileStore = require('session-file-store')(session)
const passport = require('passport')
const app = express();
const server = express();
const path = require('path')

module.exports.startServers = mode => {
    if (mode === "DEVELOPMENT") {
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
    } else {
        app.use(express.static('dist'));

        app.get('*', function(req, res) {
            res.sendFile('./index.html', {'root': __dirname + '/../../dist'});
        });
    }

    app.listen(3000, () => console.log('dev app listening on port 3000'))

    server.use(bodyParser.urlencoded({extended: false}))
    server.use(bodyParser.json())
    server.use(require('./routes/products'));

    server.use(session({
        secret: 'test',
        store: new sessionFileStore(),
        resave: false, //According to express docs, can set resave to false if session.touch is implemented?
        saveUninitialized: false, // Only logged-in sessions are saved?
        rolling: true, // If user interacts with the API, then maxAge is extended
        cookie: {
            maxAge: 1000 * 60 * 15 //15 minutes
        },
    }))
    server.use(passport.initialize())
    server.use(passport.session())

    server.use('/auth', require('./routes/auth'))

    server.listen(8080, () => console.log('backend server listening on port 8080'))
}
