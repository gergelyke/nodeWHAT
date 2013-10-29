var http = require('http'),
    express = require('express'),
    app = express();

app.get('/', function(req, res) {
    res.format({
        html: function() {
            res.send('hello budapest!')
        },
        json: function() {
            res.json({
                message: 'hello budapest'
            });
        }
    });
});

http.createServer(app).listen(3000, function (err) {
    if (err) return console.log(err);
});