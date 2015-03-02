(function() {
    "use strict";
    /**
     * Store is hydrated by copying all properties on the recived hydrate payload.
     * This is current app state passed from the server to the app.
     * An method for returning this payload is also avaiable and will be used by view-hydrate-mixin for getting initial state for the react components
     *
     * In addition to the hydrate functions the mixin also contains logic for setting/getting an store`s name.
     * This is used for hydrating correct store.
     **/
    var HydrateMixin = function(storeName){
        return  {
            hydrate : function(payload){
                this.payloadKeys = [];
                for (var key in payload) {
                    if (payload.hasOwnProperty(key)) {
                        this[key] = payload[key];
                        this.payloadKeys.push(key);
                    }
                }
            },
            getPayload:function(){
                var payload = {};
                for(var key in this) {
                    if(this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                        payload[key] = this[key];
                    }
                }

                return payload;
            },
            getName : function(){
                return storeName;
            }
        }
    };

    module.exports = HydrateMixin;

})();