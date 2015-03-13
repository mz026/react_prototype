var React = require('react');

var Fluxxor = require('fluxxor');
var flux = new Fluxxor.Flux({}, {});

var Router = require('react-router'); 
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Experts = require('./components/experts');
var Lessons = require('./components/lessons');

var App = require('./components/application');
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="experts" handler={Experts} />
    <Route name="lessons" handler={Lessons} />

    <DefaultRoute handler={Experts} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler flux={flux}/>, document.getElementById('content'));
});

