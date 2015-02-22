(function() {
    "use strict";

    var Reflux = require('reflux');
    var Dispatcher = require('../actions');


    var Page1Store = Reflux.createStore({
        listenables: Dispatcher,
        init:function(){
            this.clickedBtn = 'none';
        },
        onBtnClicked: function(name){
            this.clickedBtn = name;
            this.onPageOneRequestState();
        },
        onHydrateStore : function(initialState){
            if(initialState.pageOne){
                this.header = initialState.pageOne.header;
                this.description = initialState.pageOne.description;
                this.clickedBtn = initialState.pageOne.clickedBtn;
                this.onPageOneRequestState();
            }
        },
        onPageOneRequestState : function(){
            this.trigger(
                {
                header : this.header,
                description : this.description,
                clickedBtn : this.clickedBtn
            });
        }
    });
    

    module.exports = Page1Store;    

}).call(this);