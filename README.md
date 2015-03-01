# react-isomorphic-workbench
Workbench for setting up an isomorphic app using react.

To start watchify & dev server: "npm start"

* Isomorphic React app. First request rendered on on server before giving control to the client.
* Client side state managed using flux (reflux implementation)
* Server side using express for handling route and responding with either a React view or and updated json state
* React-router for handling routing on both sides

