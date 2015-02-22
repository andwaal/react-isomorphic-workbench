(function() {
    "use strict";

    var Reflux = require('reflux');

    var Actions = Reflux.createActions([
       'btnClicked',
       'hydrateStore'
    ]);

    module.exports = Actions;    

}).call(this);