(function() {
    "use strict";

    var Reflux = require('reflux');

    var Actions = Reflux.createActions([
       'btnClicked',
       'hydrate'
    ]);

    module.exports = Actions;    

}).call(this);