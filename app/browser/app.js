(function() {
    "use strict";

    //Importent, router must be created before stores. Or else stores is blanked out...(??)
    var router = require('./routes-container');
    var React = require('react');
    var Router = require('react-router');
    var StoreHydrator = require('./../common/isomorphic/store-hydrator');

    StoreHydrator.registerStore(require('./../common/page-one/page-one-store'));
    StoreHydrator.registerStore(require('./../common/page-two/page-two-store'));
    var RouteStore = require('./routes-store');


    var loadInitialState = function(){
        var initialState = JSON.parse( document.getElementById("initalState").innerHTML);
        return initialState;
    };


    if (typeof window !== 'undefined') {
        window.onload = function() {
            var initialState = loadInitialState();
            StoreHydrator.hydrateStores(initialState);

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
