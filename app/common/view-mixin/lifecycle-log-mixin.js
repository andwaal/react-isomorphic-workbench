(function() {
    "use strict";

    var LifeCycleMixin ={
        getInitialState: function() {
           console.log('getInitialState');
        },
        componentWillMount: function() {
            console.log('componentWillMount');
        },
        componentDidMount: function() {
            console.log('componentDidMount');
        },
        componentWillReceiveProps: function() {
            console.log('componentWillReceiveProps');
        },
        componentWillUpdate: function() {
            console.log('componentWillUpdate');
        },
        componentDidUpdate: function() {
            console.log('componentDidUpdate');
        },
        componentWillUnmount: function() {
            console.log('componentWillUnmount');
        }
    };

    module.exports = LifeCycleMixin;

})();
