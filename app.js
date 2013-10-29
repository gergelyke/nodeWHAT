var express = require('express'),
    fs = require('fs'),
    app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.send('nodeWHAT!?');
});

app.listen(3000);