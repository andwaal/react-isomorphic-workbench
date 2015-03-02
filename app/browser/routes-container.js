(function() {
    "use strict";
    var Router = require('react-router');
    var routes = require('./../common/routes');

    module.exports = Router.create({
        routes: routes,
        location: Router.HistoryLocation
    });

})();