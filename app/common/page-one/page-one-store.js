(function() {
    "use strict";

    var Reflux = require('reflux');
    var Dispatcher = require('../actions');
    var HydrateMixin = require('./../store-mixins/hydrate-mixin');
    var NameMixin = require('./../store-mixins/name-mixin');

    var PageOneStore = Reflux.createStore({
        mixins : [HydrateMixin,NameMixin],
        listenables: [Dispatcher],
        init:function(){
            this.setName('PageOneStore');
        },
        onPageOneSubPageChangedCompleted: function(initialState){
            this.loading = false;
            if(initialState){
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
        getPayload:function(){
            return  {
                header : this.header,
                description : this.description,
                content : this.content,
                loading : this.loading
            };
        },
        triggerChanges : function(){
            this.trigger(this.getPayload());
        }
    });

    module.exports = PageOneStore;

})();