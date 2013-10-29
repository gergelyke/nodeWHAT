var http = require('http'),
    express = require('express'),
    fs = require('fs'),
    app = express();

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.send('nodeWHAT!?');
});

http.createServer(app).listen(3000, function (err) {
    if (err) return console.log(err);
});