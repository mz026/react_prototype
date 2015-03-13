var React = require('react');
var Fluxxor = require('fluxxor');

var Lessons = React.createClass({
  mixins: [ Fluxxor.FluxMixin(React) ],
  render: function() {
    return (
      <div>
        <h2>Lessons</h2>
      </div>
    );
  }
})

module.exports = Lessons;
