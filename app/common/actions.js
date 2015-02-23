(function() {
    "use strict";
    var Router = require('react-router');
    var Navigation = Router.Navigation;
    var request = require('superagent');



    var Actions = Reflux.createActions({
        "pageOneChanging": {children: ["loading"], asyncResult: true },
        "hydrateStore" : {asyncResult : false}
    });




    Actions.pageOneChanging.listen(function(pageId){
        Actions.pageOneChanging.loading(true);

        request
            .get('/page1/' + pageId)
            .type('json')
            .on('error', Actions.pageOneChanging.failed)
            .end(function(res){
                AppDirector.pageOneChanging.completed(completed);
                Navigation.transitionTo('/page1/' + clicked.replace('btn',''));
            });
    });

    module.exports = Actions;
})();