(function() {
    "use strict";

    var Reflux = require('reflux');

    var Actions = Reflux.createActions([
       'btnClicked',
       'hydrateStore',
       'pageOneRequestState'
    ]);

    module.exports = Actions;    

}).call(this);