(function() {
    "use strict";

    var Reflux = require('reflux');
    var Dispatcher = require('./../common/actions');
    var router = require('./../common/routes-container');

    var RouteStore = Reflux.createStore({
        listenables: [Dispatcher],
        onPageOneSubPageChanged:function(pageId){
            router.transitionTo('/page1/' + pageId);
        },
        onGoToPageOne:function(subPage){
            var pageOneSub = subPage ? subPage : 1;
            Dispatcher.pageOneSubPageChanged(pageOneSub);
        },
        onGoToPageTwo:function(){
            router.transitionTo('/page2');
        }
    });


    module.exports = RouteStore;

})();