(function() {
    "use strict";
    var Reflux = require('reflux');
    var request = require('superagent');

    var Actions = Reflux.createActions({
        "pageOneChange": {children: ["loading"], asyncResult: true }
    });

    Actions.pageOneChange.listen(function(pageId){
        Actions.pageOneChange.loading();
        var uri = '/page1/' + pageId;
        request
            .get(uri)
            .type('json')
            .on('error', Actions.pageOneChange.failed)
            .end(function(res){
                Actions.pageOneChange.completed(res.body);
            });
    });

    module.exports = Actions;
})();