var React = require('react');

var Fluxxor = require('fluxxor');

var Router = require('react-router'); 
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Experts = require('./components/experts');
var Lessons = require('./components/lessons');

var ExpertActions = require('./actions/expert_actions');

var App = require('./components/application');
var ExpertsStore = require('./stores/experts_store');

var flux = new Fluxxor.Flux({
    Experts: new ExpertsStore()
  }, 
  { 
    Expert: ExpertActions 
  });

if (window.serializedContents) {
  var experts = JSON.parse(window.serializedContents);
  console.log(experts);
  flux.store('Experts').dehydrate(experts);
}

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="experts" path="spa-test/experts" handler={Experts} />
    <Route name="lessons" path="spa-test/lessons" handler={Lessons} />

    <DefaultRoute handler={Experts} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler flux={flux}/>, document.getElementById('content'));
});

