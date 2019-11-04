const express = require('express');
const app = express();
const server = express();

app.use(express.static('dist'));

app.get('*', function(req, res) {
    res.sendFile('./index.html', {'root': __dirname + '/../../dist'});
});

app.listen(3000, () => console.log('app listening on port 3000'))

server.use(require('./routes/products'));

server.listen(8080, () => console.log('backend server listening on port 8080'))
