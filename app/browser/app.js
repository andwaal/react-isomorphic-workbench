(function() {
    "use strict";

    var React = require('react');
    var Router = require('react-router');
    var routes = require('./../common/routes');

    if (typeof window !== 'undefined') {
        window.onload = function() {
            Router.run(routes, Router.HistoryLocation, function(Handler) {
                React.render(<Handler />, document);
            });
        }
    }
})();
