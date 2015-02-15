(function() {
    "use strict";

    var React = require('react');
    var Navigation = require('react-router').Navigation;
    var Reflux = require('reflux');
    var Page1Store = require('./page1-store');
    var Dispatcher = require('../actions');

    var Page1 = React.createClass({
        mixins: [Navigation,Reflux.ListenerMixin],
        clickMe : function(){
            this.transitionTo('page2');
        },
        clickBtn : function(e,sender){
            Dispatcher.btnClicked(e.target.id);
        },
        onPage1StoreChanged : function(payload){
            this.setState(
                {
                    clickedBtn : payload.clickedBtn
                });
        },
        getInitialState: function(){
            return {
                initialState : this.props.initialState
            }
        },
        componentDidMount: function() {
            this.listenTo(Page1Store, this.onPage1StoreChanged);
        },
        render : function(){
            return (
                <div>
                    <h1>Page one</h1>
                    InitialState is :  {this.state.initialState}
                    <div>
                        <button onClick={this.clickMe}> Go to page 2 - clientSide </button>
                    </div>
                    <div>
                        <a href="/page2"> Go to page 2 - serverSide </a>
                    </div>
                    <div>
                        <h2> Last clicked btn is: {this.state.clickedBtn}</h2>
                    </div>
                    <div>
                        <button onClick={this.clickBtn} id="btn1"> btn1 </button>
                        <button onClick={this.clickBtn} id="btn2"> btn2 </button>
                        <button onClick={this.clickBtn} id="btn3"> btn3 </button>
                        <button onClick={this.clickBtn} id="btn4"> btn4 </button>
                    </div>
                </div>
            )
        }
    });

    module.exports = Page1;

}).call(this);
