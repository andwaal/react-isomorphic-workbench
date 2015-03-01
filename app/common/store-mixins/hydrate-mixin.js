(function() {
    "use strict";

    var HydrateMixin = {
        hydrate : function(payload){
            for (var key in payload) {
                if (payload.hasOwnProperty(key)) {
                    this[key] = payload[key];
                }
            }
        }
    };

    module.exports = HydrateMixin;

})();