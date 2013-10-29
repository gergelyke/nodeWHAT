var http = require('http'),
    express = require('express'),
    fs = require('fs'),
    app = express();

app.get('/', function(req, res) {
    res.send('nodeWHAT!?');
});

app.get('/file', function (req, res) {
    return fs.readFile(__dirname + '/static/pic.gif', function (err, data) {
        if (err) return console.log(err);
        return res.send(data);
    })
});

http.createServer(app).listen(3000, function (err) {
    if (err) return console.log(err);
});