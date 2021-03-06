var React = require('react');

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Fluxxor = require('fluxxor');

var Application = React.createClass({
  mixins: [ Fluxxor.FluxMixin(React) ],
  render: function() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="experts">Experts</Link>
            </li>
            <li>
              <Link to="lessons">Lessons</Link>
            </li>
          </ul>
        </nav>

        <RouteHandler />
      </div>
    );

  }
});

module.exports = Application;
