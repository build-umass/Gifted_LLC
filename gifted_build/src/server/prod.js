require('./config')
const { createBackendServer } = require('./common')
const express = require('express')

const app = express()
app.use(express.static('dist'));
app.get('*', function(req, res) {
    res.sendFile('./index.html', {'root': __dirname + '/../../dist'});
});

app.listen(3000, () => console.log('production server listening on port 3000'))

const server = createBackendServer({secret: 'production-secret'})
server.listen(8080, () => console.log('production server listening on port 8080'))
