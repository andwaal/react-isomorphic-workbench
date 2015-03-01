(function() {
    "use strict";
    var React = require('react');
    var Reflux = require('reflux');
    var PageTwoStore = require('./page-two-store');
    var Dispatcher = require('../actions');

    var Page2 = React.createClass({
        mixins: [Reflux.ListenerMixin],
        clickMe : function(){
            Dispatcher.goToPageOne();
        },
        getInitialState:function(){
            //On server and on first render clientside this will be true
            if(this.props){
                return this.props;
            }
            else{
                return PageTwoStore.getPayload();
            }
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
