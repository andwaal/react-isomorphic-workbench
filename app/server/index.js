require('node-jsx').install();
var express = require('express');
var app = express();
app.use(express.static('./public'));

var React = require('react');
var Router = require('react-router');
var routes = require('./../common/routes');


app.use(function (req, res,next) {
    console.log(req.path);
    next();
});

app.get('*', function (req, res) {
    Router.run(routes, req.path, function (Handler) {
        var result =React.renderToString(React.createFactory(Handler)());
        res.send('<!DOCTYPE html>'+result)
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});