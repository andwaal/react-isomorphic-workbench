(function() {
    "use strict";

    var React = require('react');
    var Navigation = require('react-router').Navigation;
    var Reflux = require('reflux');
    var PageOneStore = require('./page-one-store');
    var Dispatcher = require('../actions');

    var Page1 = React.createClass({
        mixins: [Navigation,Reflux.ListenerMixin],
        clickMe : function(){
            this.transitionTo('page2');
        },
        clickBtn : function(e){
            var pageId = e.target.id.replace('btn','');
            this.transitionTo('/page1/' + pageId);
            Dispatcher.pageOneChange(pageId);
        },
        onPageOneStoreChanged : function(payload){
            this.setState(
                {
                    header : payload.header,
                    description : payload.description,
                    clickedBtn : payload.clickedBtn,
                    loading : payload.loading
                });
        },
        componentDidMount: function() {
            this.listenTo(PageOneStore, this.onPageOneStoreChanged);
        },
        render : function(){
            var payload;
            if(this.state){
                payload = this.state;
            }
            else{
                payload = this.props.initialState.pageOne;
            }

            var last;
            if(payload.loading){
                last = (<h2> Loading </h2>);
            }else{
                last = ( <h2> Last clicked btn is: {payload.clickedBtn}</h2>);
            }

            return (
                <div>
                    <h1>Page one - {payload.header} </h1>
                    <p>{payload.description} </p>
                    <div>
                        <button onClick={this.clickMe}> Go to page 2 - clientSide </button>
                    </div>
                    <div>
                        <a href="/page2"> Go to page 2 - serverSide </a>
                    </div>
                    <div>
                        {last}
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
