require('node-jsx').install();
var express = require('express');
var app = express();
app.use(express.static('./public'));


var renderHelper = require('./render-helper');


var page1StateLoader = require('./state-loaders/page1-state-loader');
var page2StateLoader = require('./state-loaders/page2-state-loader');

app.use(function (req, res,next) {
    console.log(req.path);
    next();
});

app.get('/page1', function (req, res) {
    page1StateLoader.getInitialState(req,function(initialState){
        renderHelper(req,res,initialState);
    });
});

app.get('/page2', function (req, res) {
    page2StateLoader.getInitialState(req,function(initialState){
        renderHelper(req,res,initialState);
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});