(function() {
    "use strict";

    var Reflux = require('reflux');
    var Dispatcher = require('../actions');


    var Page1Store = Reflux.createStore({
        listenables: [Dispatcher],
        init:function(){
            this.clickedBtn = 'none';
            this.loading = false;
        },
        onPageOneChangeCompleted: function(initialState){
            this.loading = false;
            if(initialState.pageOne){
                this.header = initialState.pageOne.header;
                this.description = initialState.pageOne.description;
                this.clickedBtn = initialState.pageOne.clickedBtn;
                this.triggerChanges();
            }
        },
        onPageOneChangeLoading: function(){
            this.loading = true;
            this.triggerChanges();
        },
        triggerChanges : function(){
            this.trigger(
                {
                header : this.header,
                description : this.description,
                clickedBtn : this.clickedBtn,
                loading : this.loading
            });
        }
    });
    

    module.exports = Page1Store;    

}).call(this);