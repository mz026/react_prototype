var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');


// front-end related stuff
require("node-jsx").install({extension: ".jsx", harmony: true});
var React = require('react');
var frontEndPath = path.join(__dirname, '../front_end', 'scripts').toString();
var Experts = require('../front_end/scripts/api_utils/expert');

// TODO share this with front-end
var React = require('react');
var Fluxxor = require('fluxxor');
var Router = require('react-router'); 
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Experts = require(frontEndPath + '/components/experts');
var Lessons = require(frontEndPath + '/components/lessons');
var ExpertActions = require(frontEndPath + '/actions/expert_actions');
var App = require(frontEndPath + '/components/application');
var ExpertsStore = require(frontEndPath + '/stores/experts_store');

/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO share this with front-end
  var flux = new Fluxxor.Flux({
      Experts: new ExpertsStore()
    }, 
    { 
      Expert: ExpertActions 
    });

  template = fs.readFileSync(__dirname + '/../front_end/index.html', 'utf8');

  var routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="experts" handler={Experts} />
      <Route name="lessons" handler={Lessons} />

      <DefaultRoute handler={Experts} />
    </Route>
  );

  flux.actions.Expert.updateExperts()
    .then(function() {
      Router.run(routes, function (Handler) {
        var contents = React.renderToString(<Handler flux={flux}/>);
        //TODO send state data to client
        res.send(ejs.render(template, { content: contents }));
      });
    })
});

module.exports = router;
