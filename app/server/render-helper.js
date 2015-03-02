//var router = require('./../common/routes-container');
var routes = require('./../common/routes');
var Router = require('react-router');
var jsesc = require('jsesc');
var React = require('react');

module.exports = function(req,res,route,initialState){

    Router.run(routes,route,function(Handler){
        var rectComponent = React.renderToString(<Handler {...initialState.value}/>);

        res.send('<!DOCTYPE html>'
            +rectComponent+
            '<script type="application/json" id="initalState">' +
                jsesc((JSON.stringify(initialState))) +
            '</script>');
    });
};