
var jsesc = require('jsesc');
var React = require('react');
var Router = require('react-router');
var routes = require('./../common/routes');

module.exports = function(req,res,initialState){

    Router.run(routes, req.path, function (Handler) {
        var rectComponent =React.renderToString(<Handler initialState={initialState}/>);
        res.send('<!DOCTYPE html>'
            +rectComponent+
            '<script type="application/json" id="initalState">' +
                jsesc((JSON.stringify(initialState))) +
            '</script>');

    });
};