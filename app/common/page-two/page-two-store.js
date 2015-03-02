(function() {
    "use strict";
    var Reflux = require('reflux');
    var Dispatcher = require('../actions');
    var HydrateMixin = require('./../isomorphic/store-hydrate-mixin');

    var PageTwoStore = Reflux.createStore({
        mixins : [HydrateMixin('PageTwoStore')],
        listenables: [Dispatcher],
        triggerChanges : function(){
            this.trigger(this.getPayload());
        }
    });

    module.exports = PageTwoStore;

})();