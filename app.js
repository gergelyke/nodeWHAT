var http = require('http'),
    path = require('path'),
    express = require('express'),
    fs = require('fs'),
    app = express();

app.set( "view engine", "html" );
app.set( "views", path.join( __dirname, "/views"));

app.engine('html', require('hogan-express'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/partials/:name', function(req, res) {
    res.render('index', {
        name: req.param('name')
    });
});

http.createServer(app).listen(3000, function (err) {
    if (err) return console.log(err);
});