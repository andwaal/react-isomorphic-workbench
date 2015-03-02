(function() {
    "use strict";

    /**
     * Mixin that sets initialState on the given component.
     * When rendered on server props will be set and the props will be initial state.
     * When rendered on client props will not be set, instead the mixin will return current store payload as initial state.
     */
    var ViewHydrateMixin = function(Store){
        return {
            getInitialState:function(){
                //On server and on first render clientside this will be true
                if(this.props){
                    return this.props;
                }
                else{
                    return Store.getPayload();
                }
            }
        }
    };

    module.exports = ViewHydrateMixin;

})();