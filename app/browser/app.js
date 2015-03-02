(function() {
    "use strict";

    //Importent, router must be created before stores. Or else stores is blanked out...(??)
    var router = require('./routes-container');

    var React = require('react');
    var Router = require('react-router');
    var PageOneStore = require('./../common/page-one/page-one-store');
    var PageTwoStore = require('./../common/page-two/page-two-store');
    var RouteStore = require('./routes-store');

    var stores = {};
    stores[PageOneStore.getName()] = PageOneStore;

    var loadInitialState = function(){
        var initialState = JSON.parse( document.getElementById("initalState").innerHTML);
        return initialState;
    };


    if (typeof window !== 'undefined') {
        window.onload = function() {
            var initialState = loadInitialState();
            if(stores[initialState.storeName]){
               stores[initialState.storeName].hydrate(initialState.value);
            }

            router.run(function(Handler) {
                if(initialState){
                    React.render(<Handler {...initialState.value}/>, document);
                    initialState = null;
                }
                else{
                    React.render(<Handler/>, document);
                }
            });
        }
    }
})();
