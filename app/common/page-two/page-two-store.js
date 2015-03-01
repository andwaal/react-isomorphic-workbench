(function() {
    "use strict";
    var Reflux = require('reflux');
    var Dispatcher = require('../actions');
    var HydrateMixin = require('./../store-mixins/hydrate-mixin');
    var NameMixin = require('./../store-mixins/name-mixin');

    var PageTwoStore = Reflux.createStore({
        mixins : [HydrateMixin,NameMixin],
        listenables: [Dispatcher],
        init:function(){
            this.setName('PageTwoStore');
        },
        getPayload:function(){
            return  {
                header : this.header,
                description : this.description
            };
        },
        triggerChanges : function(){
            this.trigger(this.getPayload());
        }
    });

    module.exports = PageTwoStore;

})();