##Notes so far:

* Passing initial state to client using embeded json
* Component "re-rendering" it self using embeded inital state
* Components listening to store for changes
* app.js dispatching hydrate to stores after change of route to restore client-side state when performing client-side routing


##Todos:

* Find a better way to hydrate stores at startup. It should not be nessesary for first client-side render to fetch state from props. This should be up to the store to dispatch.
* Or should it?

* ~~ Right now its a bit of a conflict happending when changing route clientside. Since initalState is still existing this is loaded back into the view when changing back. The store then takes over, but this results in a flash of state... ~~
* Fixed this by making the app.js listen to the stores. Now the router always got latest state when handling a change.


