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
            this.onHydrate();
        },
        onHydrate : function(){
            this.trigger({clickedBtn : this.clickedBtn});
        }
    });
    

    module.exports = Page1Store;    

}).call(this);