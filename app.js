var express = require('express'),
    fs = require('fs'),
    app = express();

app.get('/', function(req, res) {
    res.send('nodeWHAT!?');
});

app.get('/getpic', function(req, res) {
    fs.readFile(__dirname + '/static/pic.gif', function (err, data) {
        if (err) throw err;
        res.send(data);
    });
});

app.listen(3000);