var React = require('react');
var Greeting = React.createClass({
  render: function() {
    return <h2>Greeting { this.props.name }</h2>;
  }
});

module.exports = Greeting;
