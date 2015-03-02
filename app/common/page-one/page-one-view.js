(function() {
    "use strict";
    var React = require('react');
    var Reflux = require('reflux');
    var PageOneStore = require('./page-one-store');
    var Dispatcher = require('../actions');
    var HydrateMixin = require('./../isomorphic/view-hydrate-mixin');

    var PageOne = React.createClass({
        mixins: [Reflux.ListenerMixin, HydrateMixin(PageOneStore)],
        clickMe : function(){
            Dispatcher.goToPageTwo();
        },
        clickBtn : function(e){
            Dispatcher.pageOneSubPageChanged(e.target.id.replace('btn',''));
        },
        storeChanged : function(payload){
            this.setState(payload);
        },
        componentDidMount: function() {
            this.listenTo(PageOneStore, this.storeChanged);
        },
        render : function(){
            var last = this.state.loading ? (<h2> Loading </h2>) : ( <p> {this.state.content}</p>);
            return (
                <div>
                    <div>
                        <button onClick={this.clickBtn} id="btn1"> btn1 </button>
                        <button onClick={this.clickBtn} id="btn2"> btn2 </button>
                        <button onClick={this.clickBtn} id="btn3"> btn3 </button>
                        <button onClick={this.clickBtn} id="btn4"> btn4 </button>
                        <button onClick={this.clickMe}> Go to page 2</button>
                    </div>
                    <h1>Page one - {this.state.header} </h1>
                    <p>{this.state.description} </p>
                    <div>
                        {last}
                    </div>
                </div>
            )
        }
    });

    module.exports = PageOne;

})();
