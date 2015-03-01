(function() {
    "use strict";
    var Router = require('react-router');
    var routes = require('./routes');
    var router;
    if (typeof window !== 'undefined') {
        router = Router.create({
            routes: routes,
            location: Router.HistoryLocation
        });
    }
    else{
        router = Router.create({
            routes: routes
        });
    }


    module.exports = router;

})();