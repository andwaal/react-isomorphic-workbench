(function() {
    "use strict";

    var React = require('react');
    var Router = require('react-router');
    var routes = require('./../common/routes');
    var Dispatcher = require('../common/actions');
    var PageOneStore = require('./../common/page1/page-one-store');

    var appState = {};



    PageOneStore.listen(function(pageOneState){
        appState.pageOne = pageOneState;
    });

    var loadInitialState = function(){
        var initialState = JSON.parse( document.getElementById("initalState").innerHTML);
        Dispatcher.hydrateStore(initialState);
        return initialState;
    };


    if (typeof window !== 'undefined') {
        window.onload = function() {
            var initialState = loadInitialState();
            Router.run(routes, Router.HistoryLocation, function(Handler) {
                if(initialState){
                    React.render(<Handler initialState={initialState}/>, document);
                    initialState = null;
                }
                else{
                    React.render(<Handler initialState={appState}/>, document);
                }
            });
        }
    }
})();
