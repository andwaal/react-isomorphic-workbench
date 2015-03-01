
var jsesc = require('jsesc');
var React = require('react');
var router = require('./../common/routes-container');

module.exports = function(req,res,initialState){

    router.run(function (Handler) {
        var rectComponent = React.renderToString(<Handler {...initialState.value}/>);
        res.send('<!DOCTYPE html>'
            +rectComponent+
            '<script type="application/json" id="initalState">' +
                jsesc((JSON.stringify(initialState))) +
            '</script>');

    });
};