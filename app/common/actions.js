(function() {
    "use strict";
    var Reflux = require('reflux');
    var request = require('superagent');

    var Actions = Reflux.createActions({
        "pageOneSubPageChanged": {children: ["loading"], asyncResult: true },
        "goToPageOne" : { asyncResult:false},
        "goToPageTwo" : { asyncResult:false}
    });

    Actions.pageOneSubPageChanged.listen(function(pageId){
        Actions.pageOneSubPageChanged.loading();
        var uri = '/page1/' + pageId;
        request
            .get(uri)
            .type('json')
            .on('error', Actions.pageOneSubPageChanged.failed)
            .end(function(res){
                Actions.pageOneSubPageChanged.completed(res.body);

            });
    });

    module.exports = Actions;
})();