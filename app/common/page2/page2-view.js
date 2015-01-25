(function() {
    "use strict";

    var React = require('react');
    var Navigation = require('react-router').Navigation;

    var Page2 = React.createClass({
        mixins: [Navigation],
        clickMe : function(){
            this.transitionTo('page1');
        },
        render : function(){
            return (
                <div>
                    <h1>Page two</h1>
                    <div>
                        <button onClick={this.clickMe}> Go to page 1 - clientSide </button>
                    </div>
                    <div>
                        <a href="/page1"> Go to page 1 - serverSide </a>
                    </div>
                </div>
            )
        }
    });

    module.exports = Page2;

}).call(this);
