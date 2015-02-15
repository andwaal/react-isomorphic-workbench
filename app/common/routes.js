(function() {
    "use strict";
    var React = require('react');
    var Router = require('react-router'); // or var Router = ReactRouter; in browsers
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;
    var Link=Router.Link;
    var RouteHandler = Router.RouteHandler;
    var NotFoundRoute = Router.NotFoundRoute;

    var Page2 = require('./page2/page2-view');
    var Page1 = require('./page1/page1-view');



    var App = React.createClass({
        render: function() {
            return (
                <html>
                    <head lang="en">
                        <meta charSet="UTF-8"/>
                        <title>React App</title>
                    </head>
                    <body>
                        <div id="main">
                            <RouteHandler {...this.props}/>
                        </div>
                        <script type="text/javascript" src="/output.js"></script>
                    </body>
                </html>
            )
        }
    });

    var routes = (
        <Route path="/" handler={App}>
            <DefaultRoute handler={Page1} />
            <Route name="page1" handler={Page1}/>
            <Route name="page2" handler={Page2}/>
        </Route>
    );


    module.exports = routes;
})();
