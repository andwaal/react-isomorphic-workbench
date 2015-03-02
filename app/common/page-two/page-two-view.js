(function() {
    "use strict";
    var React = require('react');
    var Reflux = require('reflux');
    var PageTwoStore = require('./page-two-store');
    var Dispatcher = require('../actions');
    var HydrateMixin = require('./../isomorphic/view-hydrate-mixin');

    var Page2 = React.createClass({
        mixins: [Reflux.ListenerMixin,HydrateMixin(PageTwoStore)],
        clickMe : function(){
            Dispatcher.goToPageOne();
        },
        render : function(){
            return (
                <div>
                    <div>
                        <h1>{this.state.header} </h1>
                    </div>
                    <div>
                        <button onClick={this.clickMe}>Go to page one</button>
                    </div>
                    <div>
                        <p>This is page two. Page two containes no sub pages </p>
                        <p>Current desc: {this.state.description} </p>
                    </div>
                </div>
            )
        }
    });

    module.exports = Page2;

})();
