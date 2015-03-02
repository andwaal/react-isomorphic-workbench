# react-isomorphic-workbench
Workbench for setting up an isomorphic app using react.

To start watchify & dev server: "npm start"

* Isomorphic React app. First request rendered on on server before giving control to the client.
* Client side state managed using flux (reflux implementation)
* Server side using express for handling route and responding with either a React view or and updated json state
* React-router for handling routing on both sides


## Flux handling
This was one of the hardest to solve and is still WIP.
Since the client side rendering of the application gets it state from the Flux stores one needs a bit of logic for making this happen.
This is now solved using the following helpers:

##### Store hydrate mixin
This mixin is responsible for hydrating an store with the initial state passed on from the server.
Once an store is hydrated all properties placed on the store will be returned as a part of the store`s payload.
The stores identity is also saved in this mixin.

##### View hydrate mixin
This mixin is responsible for providing a React component with its initial state.
This is done by either using the props passed (this will happend when rendered server-side or first time client-side) or by calling getPayload() on the view`s store.

##### Store hydrator
Client side this helper is responsible for calling hydrate on correct store. In order to make this work all stores are registered at at application load.
Server side this helper is responsible for generating DeHydration payload for the server to pass down to the client.