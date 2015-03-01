require('node-jsx').install();
var express = require('express');
var app = express();
app.use(express.static('./public'));

var restApi = require('./rest/page-api');
var renderHelper = require('./render-helper');

app.use(function (req, res,next) {
    console.log(req.path);
    var type = req.get('content-type');
    if(type){
        console.log('type: ' + type);
    }

    next();
});

app.get('/page1',function(req,res){
    res.redirect('/page1/1');
});

app.get('/page1/:pageId', function (req, res) {
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
            renderHelper(req,res,{storeName : 'PageOneStore', value : state});
        }
    });
});


app.get('/page2', function (req, res) {
    restApi.getPageTwoData(function(state){
        renderHelper(req,res,{storeName : 'PageTwoStore', value : state});
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});