# react-isomorphic-workbench
Workbench for setting up an isomorphic app using react.

To start watchify & dev server: "npm start"

* Isomorphic React app. First request rendered on on server before giving control to the client.
* Client side state managed using flux (reflux implementation)
* Server side using express for handling route and responding with either a React view or and updated json state
* React-router for handling routing on both sides


## Flux handling
This was one of the hardest to solve and is still WIP.
Since the client side rendering of the application gets it state from the Flux stores some logic is needed to make this happen.
This is currently solved using the following helpers:

##### Store hydrate mixin
Mixin responsible for hydrating a store with the initial state passed on from the server.
Once an store is hydrated all properties, non-functions, placed on the store will be returned as a part of the store`s payload.
This mixin is also responsible for holding a stores name.

##### View hydrate mixin
Mixin responsible for providing a React component with its initial state.
This is done by either using the props passed(this will happend when rendered server-side or first time client-side) or by calling getPayload() on the view`s store.

##### Store hydrator
Client side this helper is responsible for calling hydrate on correct store. In order to make this work all stores are registered at at application load.
Server side this helper is responsible for generating DeHydration payload for the server to pass down to the client.