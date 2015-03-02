(function() {
    "use strict";
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;
    var Link=Router.Link;
    var RouteHandler = Router.RouteHandler;
    var NotFoundRoute = Router.NotFoundRoute;
    var Navigation = require('react-router').Navigation;

    var PageOne = require('./page-one/page-one-view');
    var PageTwo = require('./page-two/page-two-view');

    var App = React.createClass({
        mixins: [Navigation],
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
        <Route name="main" path="/" handler={App}>
            <DefaultRoute handler={PageOne} />
            <Route path="/page1/:pageId" handler={PageOne}/>
            <Route path="/page2" handler={PageTwo}/>
        </Route>
    );


    module.exports = routes;
})();
