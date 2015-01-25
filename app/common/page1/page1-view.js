(function() {
    "use strict";

    var React = require('react');
    var Navigation = require('react-router').Navigation;

    var Page1 = React.createClass({
        mixins: [Navigation],
        clickMe : function(){
            this.transitionTo('page2');
        },
        render : function(){
            return (
                <div>
                    <h1>Page one</h1>
                    <div>
                        <button onClick={this.clickMe}> Go to page 2 - clientSide </button>
                    </div>
                    <div>
                        <a href="/page2"> Go to page 2 - serverSide </a>
                    </div>
                </div>
            )
        }
    });

    module.exports = Page1;

}).call(this);
