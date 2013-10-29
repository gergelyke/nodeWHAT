var http = require('http'),
    express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.send('nodeWHAT!?');
});

http.createServer(app).listen(3000, function (err) {
    if (err) return console.log(err);
});