(function() {
    "use strict";
    var Reflux = require('reflux');
    var Dispatcher = require('../actions');
    var HydrateMixin = require('./../isomorphic/store-hydrate-mixin');

    var PageOneStore = Reflux.createStore({
        mixins : [HydrateMixin('PageOneStore')],
        listenables: [Dispatcher],
        init:function(){
            this.loading = false;
        },
        onPageOneSubPageChangedCompleted: function(initialState){
            if(initialState){
                this.loading = false;
                this.header = initialState.header;
                this.description = initialState.description;
                this.content = initialState.content;
                this.triggerChanges();
            }
        },
        onPageOneSubPageChangedLoading: function(){
            this.loading = true;
            this.triggerChanges();
        },
        triggerChanges : function(){
            this.trigger(this.getPayload());
        }
    });

    module.exports = PageOneStore;

})();