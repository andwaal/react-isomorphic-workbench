require('node-jsx').install();
var express = require('express');
var app = express();
app.use(express.static('./public'));


var pageOneStoreName = require('./../common/page-one/page-one-store').getName();
var pageTwoStoreName = require('./../common/page-two/page-two-store').getName();

var restApi = require('./rest/page-api');
var renderHelper = require('./render-helper');

var storeHydrator = require('./../common/isomorphic/store-hydrator');


app.get('/page1',function(req,res){
    res.redirect('/page1/1');
});

app.get('/page1/:pageId', function (req, res) {
    console.log(req.path);

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
            renderHelper(req,res,req.path,storeHydrator.getDeHydratedState(pageOneStoreName,state));
        }
    });
});

app.get('/page2', function (req, res) {
    restApi.getPageTwoData(function(err,state){
        if(err){
            res.send(500);
            return;
        }
        renderHelper(req,res,req.path,storeHydrator.getDeHydratedState(pageTwoStoreName,state));
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});