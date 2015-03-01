(function() {
    "use strict";

    var HydrateMixin = {
        setName : function(name){
            this.name = name;
        },
        getName : function(){
            return this.name;
        }
    };

    module.exports = HydrateMixin;
})();