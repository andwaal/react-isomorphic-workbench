(function() {
    "use strict";

    var React = require('react');
    var Router = require('react-router');
    var routes = require('./../common/routes');
    var Dispatcher = require('../common/actions');

    if (typeof window !== 'undefined') {
        window.onload = function() {
            var initialState = JSON.parse(document.getElementById("initalState").innerHTML);
            Router.run(routes, Router.HistoryLocation, function(Handler) {
                React.render(<Handler initialState={initialState}/>, document);
                Dispatcher.hydrate();
            });
        }
    }
})();
