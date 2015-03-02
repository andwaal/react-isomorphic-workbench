(function() {
    "use strict";
    
    var StoreHydrator = function(){
        var stores = {};
        return {
            registerStore : function(store){
                stores[store.getName()] = store;
            },
            hydrateStores : function(state){
                if(stores[state.storeName]){
                    stores[state.storeName].hydrate(state.value);
                }
            },
            getDeHydratedState: function(storeName, state){
                return {storeName : storeName, value : state};
            }
        }
    };

    module.exports = new StoreHydrator();

})();

