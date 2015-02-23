require('node-jsx').install();
var express = require('express');
var app = express();
app.use(express.static('./public'));

var restApi = require('./rest/page-api');
var renderHelper = require('./render-helper');
var page2StateLoader = require('./state-loaders/page2-state-loader');

app.use(function (req, res,next) {
    console.log(req.path);
    next();
});

app.get('/page1/:pageId', function (req, res) {
   // var requestType = req.get('content-type');
    //console.log(req.headers);
    restApi.getPageOneData(req.params.pageId,function(err,state){
        if(err){
            res.send(500);
            return;
        }
        var type = req.get('content-type');
        if(type && type.toLowerCase() === 'application/json'){
            res.json(state);
        }
        else{
            renderHelper(req,res,state);
        }
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